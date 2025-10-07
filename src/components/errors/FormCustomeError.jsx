import { GoAlertFill } from "react-icons/go";
import { FaXmark } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useRef } from "react";

const FormCustomError = ({ children }) => {

    const toastIdRef = useRef(null);

    const showError = () => {
        if (!toast.isActive(toastIdRef.current)) {
            const CustomCloseButton = ({ closeToast }) => (
                <FaXmark
                className="text-[#FF3F33] text-[18px] cursor-pointer absolute top-2 right-2"
                onClick={closeToast}
                />
            );

            toastIdRef.current = toast.error(children, {
              position: "top-right",
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              className: "font_samim my-toast custome_toasti",
              icon: <GoAlertFill className="text-[24px] text-[#FEB21A]" />,
              closeButton: <CustomCloseButton />
            });
        }
    };


      return (
          <div>
              {/* *Alert button* */}
              <div
              onClick={showError}
              className="bg-[#134686] cursor-pointer w-[36px] h-[26px] md:h-[28px] rounded-[10px] absolute left-2 top-[17px] md:top-4.5"
              >
                <span className="cursor-pointer text-[#FEB21A] text-[9px] absolute left-5.5 top-2.5">
                  <GoAlertFill />
                </span>
              </div>
          </div>
      );
};

export default FormCustomError;