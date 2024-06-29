const InputPayment = ({ register, Icon, name, value }) => {
  return (
    <div className="px-3 py-4 card border border-gray-200 bg-white rounded-md">
      <label className="cursor-pointer label">
        <div className="flex item-center justify-between gap-x-1.5">
          <div className="flex items-center">
            <span className="text-xl mr-3 text-gray-400">
              <Icon />
            </span>
            <h6 className="font-serif font-medium text-sm text-gray-600">
              {name}
            </h6>
          </div>
          <input
            {...register('paymentMethod', {
              required: 'Payment Method is required!',
            })}
            type="radio"
            value={value}
            name="paymentMethod"
            className="form-radio outline-none focus:ring-0 text-[#e0015e] mt-0.5"
          />
        </div>
      </label>
    </div>
  );
};

export default InputPayment;
