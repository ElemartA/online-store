import React, { useContext } from "react";
import { Context } from "../..";
import { observer } from "mobx-react-lite";
import { Pagination } from "react-bootstrap";

export const Pages = observer(() => {
  const { product } = useContext(Context);
  const pageCount = Math.ceil(product.totalCount / product.limit);
  const pages = [];

  for (let i = 0; i <= pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <div>
      <Pagination style={{ marginBottom: 15 }} className="mt-5">
        {pages.map((page) => {
          return (
            <Pagination.Item
              key={page}
              active={product.page === page}
              onClick={() => product.setPage(page)}
            >
              {page}
            </Pagination.Item>
          );
        })}
      </Pagination>
    </div>
  );
});

export default Pages;
