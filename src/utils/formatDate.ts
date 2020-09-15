import { format } from "date-fns";
import ptLocale from "date-fns/locale/pt";

export default (date: Date, f = "MM/dd/yyyy HH:mm") => format(date, f, { locale: ptLocale });
