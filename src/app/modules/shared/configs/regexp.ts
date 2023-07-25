export const REGEXP_EMAIL = new RegExp(
  /^[a-z0-9]+(?:(?!.*\.\.)[._@-]+[a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])*$/
);
export const REGEXP_PASSWORD = new RegExp(
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[{}`~!@#$%^&()_+='\[\]:;.,?\-\/\\])[A-Za-z\d{}`~!@#$%^&()_+='\[\]:;.,?\-\/\\]{8,256}$/
);
export const REGEXP_DATE_INPUT = new RegExp(
  /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i
);
export const REGEXP_USERNAME = new RegExp(
  /^[a-z0-9]+(?:(?!.*\.\.)[._@-]+[a-z0-9]+)*(@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9]))*$/
);
export const REGEXP_COMPANY_NAME = new RegExp(/^/);
export const REGEXP_PHONE_NUMBER = new RegExp(/^0([0-9]{9,10})$/);
export const REGEXP_MST = new RegExp(/^\d{10}-\d{3}$|^\d{10}$/i);
export const REGEXP_PARTY = new RegExp(
  /^[^\!\@\#\$\%\&\*\:\;\'\"\{\[\}\]\`\~\,\<\.\>\?\+\=\^]*[^\!\@\#\$\%\&\*\:\;\'\"\{\[\}\]\`\~\,\<\.\>\?\+\=\^]*[^\!\@\#\$\%\&\*\:\;\'\"\{\[\}\]\`\~\,\<\.\>\?\+\=\^]$/
);
export const REGEXP_NAME = new RegExp(
  /^[^~!@#$%^&(_)*=+|\}\{\[\]\;\'\"\,\>\<?`-]*$/
);
export const REGEXP_ID = new RegExp(/^[A-Za-z0-9()/\\._&!-]+$/);
export const REGEXP_ID_USER = new RegExp(
  /^[^~!@#$%^&(.:;)*=+|\}\{\[\]\;\'\"\,\>\<?`-]*$/
);
export const REGEXP_COST = new RegExp(/^[1-9][0-9]*$/);
export const REGEXP_NUMBER = new RegExp(/^[0-9]*$/);
export const REGEX_PARY_NAME = new RegExp(
  /^[~&@#$%^*=+|\}\{\[\];'",><?`\p{L}\s\d]*$/u
);
export const REGEXP_EMAIL_SDT = new RegExp(
  /([a-z0-9!#$%&'*+/=?^_{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9]))|(^0([0-9]{9,10})$)/
);
export const REGEXP_IDENTITY_ID = new RegExp(/^[0-9]{9,12}$/);
export const REGEXP_ACCOUNT = new RegExp(
  /^[A-Za-z0-9^~!<>`@[#$%^\]\&(_)*-=+{|}'"?/\\]+$/
);
export const REGEXP_CYCLE_NUMBER = new RegExp(/^[1-9]([0-9]{0,1})$/);
