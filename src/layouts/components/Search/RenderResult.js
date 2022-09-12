import React from "react";
import AccountItem from "~/components/AccountItem";

function RenderResult({ searchResult }) {
    return searchResult.map((result, index) => {
        return <AccountItem key={index} data={result} />;
    });
}

export default React.memo(RenderResult);