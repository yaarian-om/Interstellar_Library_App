import { useState } from 'react';

function Toast_Info() {
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (message) => {
    setToastMessage(message);
    setIsToastVisible(true);

    // Automatically hide the toast after a certain time
    setTimeout(() => {
      setIsToastVisible(false);
      setToastMessage('');
    }, 3000); // Hide after 3 seconds
  };

  return (
    <div className={`toast ${isToastVisible ? 'toast-end' : ''}`}>
      {isToastVisible && (
        <div className="alert alert-info">
          <span>{toastMessage}</span>
        </div>
      )}
      {/* ... other toast messages ... */}
    </div>
  );
}

export default Toast_Info;
