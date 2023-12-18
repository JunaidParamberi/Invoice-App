import React from "react";

function InvoiceBody({
  setShowInput,
  handleInputValue,
  showInput,
  isInputShown,
  setNewInvoice,
  newInvoice,
  handleChange,
  handleKeyown,
  addNewRow,
  subtotal,
}) {
  return (
    <div className="invo-body">
      <div className="body-head">
        <ul>
          <li className="text-gray-500 text-[10px] font-mediumfont-['Inter'] leading-[14px]">
            Items Desscription
          </li>
          <li className="text-gray-500 text-[10px] font-mediumfont-['Inter'] leading-[14px]">
            Qty
          </li>
          <li className="text-gray-500 text-[10px] font-mediumfont-['Inter'] leading-[14px]">
            Rate
          </li>
          <li className="text-gray-500 text-[10px] font-mediumfont-['Inter'] leading-[14px]">
            Amount
          </li>
        </ul>
      </div>

      <div className="sevice-details">
        {newInvoice.serviceDetails.map((serviceDetail, index) => (
          <ul key={serviceDetail.id}>
            {showInput.description ? (
              <input
                className="des-input"
                type="text"
                placeholder="Web Design, Web Development.."
                onKeyDown={(e) => handleKeyown(e, "description")}
                onChange={(e) => handleChange(e, index)}
                name="description"
                value={serviceDetail.description}
              />
            ) : (
              <li
                onClick={() =>
                  setShowInput((prev) => ({ ...prev, description: true }))
                }
                className="text-zinc-900 text-[10px] font-medium font-['Inter'] leading-[14px]"
              >
                {serviceDetail.description}
              </li>
            )}

            {showInput.qty ? (
              <input
                className="qty-input"
                type="number"
                placeholder="1"
                onKeyDown={(e) => handleKeyown(e, "qty")}
                onChange={(e) => handleChange(e, index)}
                name="qty"
                value={serviceDetail.qty}
              />
            ) : (
              <li
                onClick={() => setShowInput((prev) => ({ ...prev, qty: true }))}
                className="text-zinc-900 text-[10px] font-medium font-['Inter'] leading-[14px]"
              >
                {serviceDetail.qty}
              </li>
            )}

            {showInput.rate ? (
              <input
                className="rate-input"
                type="tel"
                placeholder="AED 1000"
                onKeyDown={(e) => handleKeyown(e, "rate")}
                onChange={(e) => handleChange(e, index)}
                name="rate"
                value={serviceDetail.rate}
              />
            ) : (
              <li
                onClick={() =>
                  setShowInput((prev) => ({ ...prev, rate: true }))
                }
                className="text-zinc-900 text-[10px] font-medium font-['Inter'] leading-[14px]"
              >
                AED {serviceDetail.rate}
              </li>
            )}

            {/* {showInput.amount ? (
              <input
                className="rate-input"
                type="tel"
                placeholder="AED 1000"
                onKeyDown={(e) => handleKeyown(e, "amount")}
                onChange={(e) => handleChange(e, index)}
                name="amount"
                value={serviceDetail.amount}
              />
            ) : ( */}
            <li
              // onClick={() =>
              //   setShowInput((prev) => ({ ...prev, amount: true }))
              // }
              className="text-zinc-900 text-[10px] font-medium font-['Inter'] leading-[14px]"
            >
              AED {eval(serviceDetail.rate * serviceDetail.qty)}
            </li>
            {/* )} */}
          </ul>
        ))}
      </div>

      <button onClick={addNewRow} className="add-row">
        Add New Row
      </button>

      <div className="total-amout-container">
        <div className="w-[282px]  rounded-tr-xl ">
          <div className="total-part">
            <div className="subtotal">
              <ul>
                <li className="text-zinc-900 text-[10px] font-medium font-['Inter'] leading-[14px]">
                  Subtotal
                </li>
                <li className="text-zinc-900 text-[10px] font-medium font-['Inter'] leading-[14px]">
                  AED {subtotal.toFixed(2)}
                </li>
              </ul>
              <ul>
                <li className="text-zinc-900 text-[10px] font-medium font-['Inter'] leading-[14px]">
                  Discount
                </li>

                {showInput.discount ? (
                  <input
                    className="rate-input"
                    type="tel"
                    placeholder="AED 1000"
                    onKeyDown={(e) => handleKeyown(e, "discount")}
                    onChange={handleChange}
                    name="discount"
                    value={newInvoice.billTo.discount}
                  />
                ) : (
                  <li
                    onClick={() =>
                      setShowInput((prev) => ({ ...prev, discount: true }))
                    }
                    className="text-zinc-900 text-[10px] font-medium font-['Inter'] leading-[14px]"
                  >
                    AED {newInvoice.billTo.discount}
                  </li>
                )}
              </ul>
              <ul>
                <li className="text-zinc-900 text-[10px] font-medium font-['Inter'] leading-[14px]">
                  Total
                </li>
                <li className="text-zinc-900 text-[10px] font-medium font-['Inter'] leading-[14px]">
                  AED {eval(subtotal - newInvoice.billTo.discount)}
                </li>
              </ul>
            </div>
            <ul className="total-due w-[282px] h-10 bg-blue-500 rounded-bl-xl rounded-br-xl">
              <li className="text-white text-xs font-bold font-['Inter'] leading-tight">
                Total due
              </li>
              <li className="text-white text-xs font-bold font-['Inter'] leading-tight">
                AED {eval(subtotal - newInvoice.billTo.discount)}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" amount-inwords text-gray-500 text-[10px] font-normal font-['Inter'] leading-[14px]">
        AED Four Thousand Nine Hundred Fifty Only.
      </div>
    </div>
  );
}

export default InvoiceBody;
