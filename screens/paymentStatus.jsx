import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function PaymentStatus() {
  const [status, setStatus] = useState("Checking payment...");
  const [searchParams] = useSearchParams();
  const txnId = searchParams.get("txnId");

  useEffect(() => {
    async function checkStatus() {
      try {
        const res = await fetch(
          `http://127.0.0.1:4444/payment/status/${txnId}`,
          { method: "GET", credentials: "include" }
        );
        const data = await res.json();

        if (data.success) {
          setStatus("✅ Payment Successful!");
        } else {
          setStatus("❌ Payment Failed or Pending");
        }
      } catch (err) {
        setStatus("⚠️ Error while checking payment status");
      }
    }

    if (txnId) checkStatus();
  }, [txnId]);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h2 className="text-2xl">{status}</h2>
      <p>Transaction ID: {txnId}</p>
    </div>
  );
}

export default PaymentStatus;
