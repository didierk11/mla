import { useLocation } from "react-router-dom";

export function formatPrice (amount, currency, style){
  let obj = new Intl.NumberFormat("de-DE", {
    style: style,
    currency: currency,
  });
  return obj.format(amount);
};

export function useQuery() { 
    let query = new URLSearchParams(useLocation().search);
    return query.get("search");
}