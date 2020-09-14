import { format } from "date-fns";
import ptLocale from "date-fns/locale/pt";

export default (date: Date, f = "dd/MM/yyyy HH-mm-SS") => format(date, f, { locale: ptLocale });
