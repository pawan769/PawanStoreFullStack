/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";
import ReactDOM from "react-dom";
import { useEffect } from "react";

const Button = ({ name, state, action, payload }) => {
  return (
    <button
      onClick={() => {
        const confirmHandler = () => {
          action(payload);
          state(false);
        };
        name.toLowerCase() == "cancel"
          ? state(false)
          : name.toLowerCase() == "confirm"
          ? confirmHandler()
          : state(true);
      }}
      className="bg-emerald-500 mr-2 w-[5rem] rounded-sm px-2 py-1 text-white"
    >
      {name}
    </button>
  );
};

const Modal = ({ modal, state, action, payload }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);
  const { prompt, btn } = modal;
  return ReactDOM.createPortal(
    <>
      <div
        className="bg-[rgba(0,0,0,0.4)] fixed inset-0 z-30"
        onClick={() => {
          state(false);
        }}
      ></div>
      <div className="bg-white rounded-sm fixed top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]  max-w-[30rem] min-w-[24rem] h-[10rem] p-5 z-40 flex flex-col justify-between ">
        <MdClose
          className="fixed right-3 top-3 text-xl cursor-pointer"
          onClick={() => {
            state(false);
          }}
        />
        <p className="font-semibold text-xl text-left ">{prompt}</p>
        <div className="flex justify-end">
          {btn.map((elem, index) => (
            <Button
              key={index}
              name={elem.name}
              state={state}
              action={action}
              payload={payload}
            />
          ))}
        </div>
      </div>
    </>,
    document.querySelector(".myModalPortal")
  );
};

export default Modal;
