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
        "bg-white top-[120px] transition-all duration-700 px-12 py-6 rounded-2xl overflow-clip fixed shadow-md after:content-[''] after:w-[var(--bar-width)] after:h-[5px] after:bg-fuchsia-600 after:absolute after:bottom-0 after:left-0 " +
        (notificationSent
          ? 'right-[200px] opacity-100'
          : 'right-[-100px] opacity-0')
      }
      style={{ ['--bar-width' as any]: `${notificationBarWidth}%` }}
    >
      <h3 className='text-indigo-950 font-medium text-2xl'>Cart Updated!</h3>
    </div>
  );
};

export default QuantityCartUpdateNotification;
