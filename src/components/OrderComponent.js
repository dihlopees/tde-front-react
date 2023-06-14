const OrderComponent = ({ arrayNumber }) => {
  return (
    <div>
      <p>Array de números: {arrayNumber.join(',')}</p>
    </div>
  );
};

export default OrderComponent;
