import React from "react";
import SearchBar from "../../components/admin/SearchBar";
import Spacer from "../../components/common/Spacer";
import PageHeader from "../../components/common/PageHeader";

const SearchUserPage = () => {
  return (
    <>
    <PageHeader title="Search" />
      <Spacer />
      <SearchBar />
      <Spacer />
    </>
  );
};

export default SearchUserPage;
