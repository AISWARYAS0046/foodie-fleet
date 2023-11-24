import React, { useState } from 'react';

const PaymentDetails = () => {
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [upiId, setUpiId] = useState('');
  const [name, setName] = useState('');

  const handlePayment = (e) => {
    e.preventDefault();
    setPaymentConfirmed(true);
  };

  return (
    <div
      className="payment-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      }}
    >
      {paymentConfirmed ? (
        <div>
          <h2>Payment Confirmed!</h2>
          <p>Thank you for your payment.</p>
        </div>
      ) : (
        <>
          <h2>Payment Details</h2>
          <form
            className="payment-form"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
            onSubmit={handlePayment}
          >
            <table>
              <tbody>
                <tr>
                  <td>Phone Number:</td>
                  <td>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      style={{ padding: '5px' }}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>UPI ID:</td>
                  <td>
                    <input
                      type="text"
                      id="upiId"
                      name="upiId"
                      style={{ padding: '5px' }}
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Name:</td>
                  <td>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      style={{ padding: '5px' }}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pay button */}
            <button type="submit" className="pay-button" style={{ marginTop: '10px' }}>
              Pay
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default PaymentDetails;
