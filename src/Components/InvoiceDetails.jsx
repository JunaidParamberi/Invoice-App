import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function InvoiceDetails({
  setShowInput,
  handleInputValue,
  showInput,
  isInputShown,
  setNewInvoice,
  newInvoice,
  handleChange,
  handleKeyown,
}) {
  return (
    <div className="invoice-details">
      <div className="bill-to-details">
        <div className="w-[104px] h-[78px] flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-gray-500 text-[10px] font-medium font-['Inter'] leading-[14px]">
            Billed to
          </div>
          <div className="flex-col justify-start items-start gap-0.5 flex">
            {showInput.name ? (
              <input
                className="name-input"
                type="text"
                placeholder="Martin Smith"
                onKeyDown={(e) => handleKeyown(e, "name")}
                onChange={handleChange}
                name="name"
                value={newInvoice.billTo.name}
              />
            ) : (
              <div
                onClick={() =>
                  setShowInput((prev) => ({ ...prev, name: true }))
                }
                className="text-zinc-900 text-[10px] font-semibold font-['Inter'] leading-[14px]"
              >
                {newInvoice.billTo.name}
              </div>
            )}

            {showInput.address ? (
              <textarea
                className="address-textarea"
                type="text"
                placeholder="#1001, eg.building..."
                onKeyDown={(e) => handleKeyown(e, "address")}
                onChange={handleChange}
                name="address"
                value={newInvoice.billTo.address}
              />
            ) : (
              <div
                onClick={() =>
                  setShowInput((prev) => ({ ...prev, address: true }))
                }
                className="text-gray-500 text-[10px] font-normal font-['Inter'] leading-[14px] min-w-{150px} :"
              >
                {newInvoice.billTo.address}
              </div>
            )}

            {showInput.phoneNumber ? (
              <input
                className="num-input"
                type="tel"
                placeholder="+0 (000) 123-4567"
                onKeyDown={(e) => handleKeyown(e, "phoneNumber")}
                onChange={handleChange}
                name="phoneNumber"
                value={newInvoice.billTo.phoneNumber}
              />
            ) : (
              <div
                onClick={() =>
                  setShowInput((prev) => ({ ...prev, phoneNumber: true }))
                }
                className="text-gray-700 text-[12px] font-normal font-['Inter'] leading-[14px]"
              >
                {newInvoice.billTo.phoneNumber}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="other-bill-to-details">
        <div className=" dates  w-[281px] h-[52px]  ">
          <div className="invo-due-date">
            <div className="text-gray-500 text-[10px] font-medium font-['Inter'] leading-[14px]">
              Due date
            </div>
            {showInput.dueDate ? (
              <input
                type="date"
                name="dueDate"
                className="date-input"
                value={newInvoice.dates.dueDate}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyown(e, "dueDate")}
              />
            ) : (
              <div
                onClick={() =>
                  setShowInput((prev) => ({ ...prev, dueDate: true }))
                }
                className="text-zinc-900 text-[10px] font-semibold font-['Inter'] leading-[14px]"
              >
                {newInvoice.dates.dueDate}
              </div>
            )}
          </div>
          <div className="invo-date">
            <div className="text-right text-gray-500 text-[10px] font-medium font-['Inter'] leading-[14px]">
              Invoice date
            </div>
            {showInput.invoiceDate ? (
              <input
                type="date"
                name="invoiceDate"
                className="date-input"
                value={newInvoice.dates.invoiceDate}
                onChange={handleChange}
                onKeyDown={(e) => handleKeyown(e, "invoiceDate")}
              />
            ) : (
              <div
                onClick={() =>
                  setShowInput((prev) => ({ ...prev, invoiceDate: true }))
                }
                className="text-right text-zinc-900 text-[10px] font-semibold font-['Inter'] leading-[14px]"
              >
                {newInvoice.dates.invoiceDate}
              </div>
            )}
          </div>
        </div>

        <div className="invoice-numbers">
          <div className="number">
            <div className="text-gray-500 text-[10px] font-medium font-['Inter'] leading-[14px]">
              Invoice number
            </div>

            {showInput.invoiceNumber ? (
              <input
                className="ivo-num-input"
                type="tel"
                placeholder="#AB2324-01"
                onKeyDown={(e) => handleKeyown(e, "invoiceNumber")}
                onChange={handleChange}
                name="invoiceNumber"
                value={newInvoice.billTo.invoiceNumber}
              />
            ) : (
              <div
                onClick={() =>
                  setShowInput((prev) => ({ ...prev, invoiceNumber: true }))
                }
                className="text-zinc-900 text-[10px] font-semibold font-['Inter'] leading-[14px]"
              >
                {newInvoice.billTo.invoiceNumber}
              </div>
            )}
          </div>

          <div className="reffernce-num">
            <div className="text-right text-gray-500 text-[10px] font-medium font-['Inter'] leading-[14px]">
              Reference
            </div>
            {showInput.reference ? (
              <input
                className="ivo-ref-input"
                type="tel"
                placeholder="INV-057"
                onKeyDown={(e) => handleKeyown(e, "reference")}
                onChange={handleChange}
                name="reference"
                value={newInvoice.billTo.reference}
              />
            ) : (
              <div
                onClick={() =>
                  setShowInput((prev) => ({ ...prev, reference: true }))
                }
                className="text-right text-zinc-900 text-[10px] font-semibold font-['Inter'] leading-[14px]"
              >
                {newInvoice.billTo.reference}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceDetails;
