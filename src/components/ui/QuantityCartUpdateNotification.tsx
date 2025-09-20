type QuantityCartUpdateNotificationProps = {
  notificationSent: boolean;
  notificationBarWidth: number;
};

const QuantityCartUpdateNotification = ({
  notificationSent,
  notificationBarWidth,
}: QuantityCartUpdateNotificationProps) => {
  if (!notificationSent) return;

  return (
    <div
      role='status'
      className={
        "bg-white md:top-[120px] sm:top-[100px] top-[50px] transition-all duration-700 md:px-12 sm:px-9 px-5 md:py-6 sm:py-4.5 py-2.5 rounded-2xl overflow-clip fixed shadow-md after:content-[''] after:w-[var(--bar-width)] after:h-[5px] after:bg-fuchsia-600 after:absolute after:bottom-0 after:left-0 " +
        (notificationSent
          ? 'lg:right-[200px] sm:right-[80px] sm:translate-x-0 right-[50%] translate-x-[50%] opacity-100'
          : 'lg:right-[-100px] right-[-80px] opacity-0')
      }
      style={{ ['--bar-width' as any]: `${notificationBarWidth}%` }}
    >
      <h3 className='text-indigo-950 font-medium lg:text-2xl sm:text-xl text-base'>
        Cart Updated!
      </h3>
    </div>
  );
};

export default QuantityCartUpdateNotification;
