import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import InvoiceDetails from "./Components/InvoiceDetails";
import InvoiceBody from "./Components/InvoiceBody";
import Footer from "./Components/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [showInput, setShowInput] = useState({
    name: true,
    address: true,
    phoneNumber: true,
    dueDate: true,
    invoiceDate: true,
    invoiceNumber: true,
    reference: true,
    description: true,
    qty: true,
    rate: true,
    amount: true,
    discount: true,
  });

  function addNewRow() {
    setNewInvoice((prevState) => ({
      ...prevState,
      serviceDetails: [
        ...prevState.serviceDetails,
        {
          id: uuidv4(),
          description: "",
          qty: "",
          rate: "",
          amount: "",
        },
      ],
    }));
  }

  const [newInvoice, setNewInvoice] = useState({
    billTo: {
      name: "",
      address: "",
      phoneNumber: "",
      discount: "",
    },
    dates: {
      dueDate: "",
      invoiceDate: "",
      invoiceNumber: "",
      reference: "",
    },

    serviceDetails: [
      {
        id: uuidv4(),
        description: "",
        qty: "",
        rate: "",
        amount: "",
      },
    ],
  });

  const [subtotal, setSubtotal] = useState(0);

  const handleChange = (event, index) => {
    const { name, value } = event.target;

    setNewInvoice((prevState) => {
      const updatedInvoice = {
        ...prevState,
        billTo: {
          ...prevState.billTo,
          [name]: value,
        },
        dates: {
          ...prevState.dates,
          [name]: value,
        },
        serviceDetails: prevState.serviceDetails.map((detail, i) =>
          i === index ? { ...detail, [name]: value } : detail
        ),
      };

      // Calculate subtotal
      const newSubtotal = updatedInvoice.serviceDetails.reduce(
        (sum, detail) => sum + eval(detail.rate * detail.qty),
        0
      );

      setSubtotal(newSubtotal);

      return updatedInvoice;
    });
  };

  function handleKeyown(event, inputName) {
    if (event.key === "Enter") {
      setShowInput((prevState) => ({
        ...prevState,
        [inputName]: false,
      }));
    }
  }

  return (
    <div className="invoice-container">
      <div className="invoice flex flex-col min-h-screen ">
        <Header />
        <InvoiceDetails
          isInputShown={handleKeyown}
          showInput={showInput}
          newInvoice={newInvoice}
          setNewInvoice={setNewInvoice}
          handleChange={handleChange}
          setShowInput={setShowInput}
          handleKeyown={handleKeyown}
        />
        <InvoiceBody
          isInputShown={handleKeyown}
          showInput={showInput}
          newInvoice={newInvoice}
          setNewInvoice={setNewInvoice}
          handleChange={handleChange}
          setShowInput={setShowInput}
          handleKeyown={handleKeyown}
          addNewRow={addNewRow}
          subtotal={subtotal}
        />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
