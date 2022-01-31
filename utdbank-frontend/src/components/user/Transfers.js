import moment from "moment";
import React, { useEffect, useState } from "react";
import { Table, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getTransfers } from "../../api/transfer-service";

const Transfers = () => {
  const [loading, setLoading] = useState(true);
  const [transfers, setTransfers] = useState([]);
  const navigate = useNavigate();

  const showDetails = (id) => {
    navigate(`/transfers/${id}`);
  };

  useEffect(() => {
    getTransfers().then((resp) => {
      setTransfers(resp.data);
      setLoading(false);
    });
  }, []);
  console.log(transfers);
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>Account No</th>
          <th>To Account No</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {loading && (
          <tr>
            <td colSpan={5}>
              <Spinner animation="border" size="sm" /> Loading...
            </td>
          </tr>
        )}
        {transfers.map((item, index) => (
          <tr
            key={index}
            onClick={() => showDetails(item.id)}
            className="cursor-hand"
          >
            <td>{index + 1}</td>
            <td>{item.fromAccountId}</td>
            <td>{item.toAccountId}</td>
            <td>{item.transactionAmount}</td>
            <td>{moment(item.transactionDate).format("lll")}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Transfers;
