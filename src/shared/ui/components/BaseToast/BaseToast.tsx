import { Toast } from "@/shared/types/Toast";
import BaseButton from "@/shared/ui/components/BaseButton/BaseButton";
import "./BaseToast.scss";

const BaseToast = ({
  toast,
  btnClick,
}: {
  toast: Toast;
  btnClick: () => void;
}) => {
  return (
    <>
      {toast.isVisible && (
        <div
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast__header">
            <strong>{toast.title}</strong>
            <BaseButton
              btnValue={<i className="fa-solid fa-xmark"></i>}
              btnClick={btnClick}
            />
          </div>
          <div className="toast__message">
            {toast.messages.map((message, index) => (
              <p key={index}>{message}</p>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BaseToast;
