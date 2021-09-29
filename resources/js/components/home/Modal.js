import React from "react";

const Modal = ({ setIsModalVisible, isModalVisible }) => {
    return (
        <div
            className="fixed top-0 bottom-0 right-0 left-0 z-30 overflow-x-hidden overflow-y-auto"
            style={{ background: "rgba(51, 51, 51, 0.5)" }}
        >
            <div className="bg-white max-w-2xl p-4 shadow-md mx-auto rounded-md mt-8">
                <div className="flex justify-between border-b">
                    <p>MYMUP Digital</p>
                    <button
                        onClick={() => {
                            setIsModalVisible(!isModalVisible);
                        }}
                    >
                        X
                    </button>
                </div>
                <iframe
                    src="https://player.vimeo.com/video/356141204?h=2bafae1bcf"
                    width="640"
                    height="360"
                    frameBorder="0"
                    allowFullScreen
                    className="mx-auto my-4"
                ></iframe>
            </div>
        </div>
    );
};

export default Modal;
