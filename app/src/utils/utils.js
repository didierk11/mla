import { useLocation } from "react-router-dom";

export const formatPrice = (amount, currency, style) => {
  let obj = new Intl.NumberFormat("de-DE", {
    style: style,
    currency: currency,
  });
  return obj.format(amount);
};

export const useQuery = () => {
  let query = new URLSearchParams(useLocation().search);
  return query.get("search");
};
