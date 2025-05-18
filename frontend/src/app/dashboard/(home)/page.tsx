'use client'

import CreateAccountForm from "@/template/examples/accountsform";
import AccountsList from "@/template/examples/accounts";
import TransferForm from "@/template/examples/transfer";
import CreateCardForm from "@/template/examples/createcard";
import TransactionHistory from "@/template/examples/transaction";
import CardsPage from "@/template/examples/card";

const Dashboard = () => {

    return (
        <>
        <CreateAccountForm />
        <AccountsList />
        <TransferForm />
        <CreateCardForm />
        <TransactionHistory accountId={4} />
        <TransactionHistory accountId={5} />
        <CardsPage />
        </>
    )
}

export default Dashboard;