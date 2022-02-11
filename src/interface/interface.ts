// To parse this data:
//
//   import { Convert } from "./file";
//
//   const data = Convert.toData(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Data {
  _id:       ID;
  summary:   Summary;
  orderId:   ID;
  shop:      Shop;
  user:      DatumUser;
  customer:  Customer;
  payments:  Payment[];
  products:  ProductElement[];
  createdAt: CreatedAtClass;
  updatedAt: CreatedAtClass;
  number:    number;
  __v:       number;
  checked?:  boolean;
}

export interface ID {
  $oid: string;
}

export interface CreatedAtClass {
  $date: Date;
}

export interface Customer {
  user_id:        number;
  customerId:     ID;
  firstName:      string;
  lastName:       string;
  identification: string;
  phone:          string;
}

export interface Payment {
  totalPaid:      number;
  tax:            number;
  _id:            ID;
  paymentMethod:  PaymentMethod;
  paymentData:    PaymentData;
  change?:        number;
  paymentStatus?: string;
  createdAt?:     CreatedAtClass;
  updatedAt?:     CreatedAtClass;
  user?:          PaymentUser;
}

export interface PaymentData {
  _id:                 ID | IDIDEnum;
  name:                PaymentMethod;
  title:               Title;
  description:         Description;
  paymentInstructions: string;
  active?:             boolean;
  createdAt?:          CreatedAtClass | Date;
  updatedAt?:          CreatedAtClass | Date;
  __v?:                number;
  carrier?:            null;
  config?:             Config;
  logo?:               Logo;
  customerCreditData?: CustomerCreditData;
}

export enum IDIDEnum {
  The6108163F12Ec83034A62A273 = "6108163f12ec83034a62a273",
  The6108166712Ec83034A62A274 = "6108166712ec83034a62a274",
  The6108169312Ec83034A62A275 = "6108169312ec83034a62a275",
  The614Cf241Dc4De451679A894C = "614cf241dc4de451679a894c",
}

export interface Config {
  enableAppReseller:   number;
  enablePOS:           number;
  enableMultiPayments: number;
  customerRequired:    number;
  style:               Style;
}

export interface Style {
  color:           string;
  backgroundColor: string;
}

export interface CustomerCreditData {
  customerCreditId:          ID | string;
  customerCreditStatementId: ID;
}

export enum Description {
  PPagaConTransferenciaPorBancolombiaP = "<p>Paga con transferencia por Bancolombia</p>",
  PPagoACréditoP = "<p>Pago a crédito</p>",
  PPagoContraEntregaPagasAlRecibirElPedidoP = "<p>Pago contra entrega, pagas al recibir el pedido</p>",
  PPagoEnEfectivoDirectoEnNuestraTiendaDeMayoristaP = "<p>Pago En efectivo directo en nuestra tienda de mayorista</p>",
}

export interface Logo {
  tags:       any[];
  _id:        LogoID;
  createdAt:  Date;
  updatedAt:  Date;
  __v:        number;
  path:       string;
  imageSizes: ImageSizes;
}

export enum LogoID {
  The60B8D0B4F0Ed6063Dadd4C96 = "60b8d0b4f0ed6063dadd4c96",
  The60B8Dfbaf0Ed6063Dadd4C98 = "60b8dfbaf0ed6063dadd4c98",
  The60Bf5C26Bfa898240Ed27032 = "60bf5c26bfa898240ed27032",
  The60Bf5D35Bfa898240Ed27033 = "60bf5d35bfa898240ed27033",
  The60Bf5E5Dbfa898240Ed27034 = "60bf5e5dbfa898240ed27034",
  The60C0B894Dc5D3F4974576F3C = "60c0b894dc5d3f4974576f3c",
  The60C9E1387470E22994Dcd259 = "60c9e1387470e22994dcd259",
  The611556311Ac7F71Db9B2784F = "611556311ac7f71db9b2784f",
  The6116C8C685B47C2F2799Cf86 = "6116c8c685b47c2f2799cf86",
  The6116Caf585B47C2F2799Cf87 = "6116caf585b47c2f2799cf87",
  The6116Cf5785B47C2F2799Dd98 = "6116cf5785b47c2f2799dd98",
  The611D16211Ba49E32Eacb7Dd6 = "611d16211ba49e32eacb7dd6",
  The611D494F1Ba49E32Eacc2D92 = "611d494f1ba49e32eacc2d92",
  The61264B481E60Df39C37Ebd8F = "61264b481e60df39c37ebd8f",
  The615Da92583C43D3B322A741E = "615da92583c43d3b322a741e",
  The615Dc93383C43D3B322A7449 = "615dc93383c43d3b322a7449",
  The615Dcafb83C43D3B322A744A = "615dcafb83c43d3b322a744a",
  The615Dcb0483C43D3B322A744B = "615dcb0483c43d3b322a744b",
  The6160531F074Aeb62C49E8345 = "6160531f074aeb62c49e8345",
}

export interface ImageSizes {
  imgwebp:   string;
  imgjpg:    string;
  thumbnail: string;
}

export enum PaymentMethod {
  Bankwire = "bankwire",
  Cash = "cash",
  Cashondelivery = "cashondelivery",
  Credit = "credit",
}

export enum Title {
  Bancolombia = "Bancolombia",
  Crédito = "Crédito",
  Efectivo = "Efectivo",
  PagoContraEntrega = "Pago contra entrega",
}

export interface PaymentUser {
  user_id: number;
  name:    UserName;
}

export enum UserName {
  AdminPOS = "Admin POS",
  AnaMariaPerezG = "Ana Maria Perez G",
  DianaBuritica = "Diana Buritica",
  LauraCiroVelasquez = "Laura Ciro Velasquez",
  MariaIsabelSepulvedaMontero = "Maria Isabel Sepulveda Montero",
  MelizaCastaño = "Meliza Castaño",
  VivianaBetancur = "Viviana Betancur",
}

export interface ProductElement {
  shippingChecked:  ShippingChecked;
  discount:         number;
  _id:              ID;
  product_id:       number;
  category_id:      number;
  categories:       Categories;
  warehouse_id:     number;
  quantity:         number;
  reference:        string;
  description:      string;
  barcode:          string;
  price:            number;
  wholesale_price:  number;
  reseller_price:   number;
  color:            PurpleColor;
  size:             Size;
  cover?:           Cover;
  shipping:         Shipping;
  unitPrice:        number;
  cost:             number;
  productType?:     Type;
  salePriceUnit:    number;
  salePriceTotal:   number;
  inventoryStatus?: InventoryStatus;
  inventory?:       Inventory;
}

export enum Categories {
  Categories21 = "[[21]]",
  Categories46 = "[46]",
  The20 = "[20]",
  The202246 = "[[20],[[22],[46]]]",
  The21 = "[21]",
  The2156216321662184 = "[[[21],[56]],[[21],[63]],[[21],[66]],[[21],[84]]]",
  The215921622165 = "[[[21],[59]],[[21],[62]],[[21],[65]]]",
  The2160 = "[[[21],[60]]]",
  The216021622165 = "[[[21],[60]],[[21],[62]],[[21],[65]]]",
  The21602163 = "[[[21],[60]],[[21],[63]]]",
  The216021632165 = "[[[21],[60]],[[21],[63]],[[21],[65]]]",
  The2161216321662184 = "[[[21],[61]],[[21],[63]],[[21],[66]],[[21],[84]]]",
  The216321662184 = "[[[21],[63]],[[21],[66]],[[21],[84]]]",
  The2184 = "[[[21],[84]]]",
  The218421632166 = "[[[21],[84]],[[21],[63]],[[21],[66]]]",
  The218421662163 = "[[[21],[84]],[[21],[66]],[[21],[63]]]",
  The22 = "[22]",
  The2246 = "[[[22],[46]]]",
  The2270 = "[[[22],[70]]]",
  The2271 = "[[[22],[71]]]",
  The2285 = "[[[22],[85]]]",
  The23 = "[23]",
  The2377 = "[[[23],[77]]]",
  The2380 = "[[[23],[80]]]",
  The38 = "[38]",
  The46 = "[[46]]",
  The4959 = "[[[49],[59]]]",
  The4960 = "[[[49],[60]]]",
  The50 = "[50]",
  The5069 = "[[[50],[69]]]",
  The59 = "[59]",
  The60 = "[60]",
  The67 = "[67]",
  The69 = "[69]",
  The80 = "[[80]]",
}

export interface PurpleColor {
  id:             number;
  name:           NameInternalEnum;
  image:          Logo | null | string;
  html:           HTML | null;
  name_internal?: NameInternalEnum;
  red?:           number | null;
  green?:         number | null;
  blue?:          number | null;
  created_at?:    Date;
  owner_user_id?: number;
  active?:        number;
}

export enum HTML {
  A8E5E6 = "#a8e5e6",
  Acdccf = "#acdccf",
  B1A3C8 = "#b1a3c8",
  Baa312 = "#baa312",
  C181A9 = "#c181a9",
  D8C2Ff = "#d8c2ff",
  D9Ec4B = "#d9ec4b",
  E1D4F7 = "#e1d4f7",
  Ea7Bc1 = "#ea7bc1",
  F2E5Ce = "#f2e5ce",
  F3F3F1 = "#f3f3f1",
  F51414 = "#f51414",
  F53D3D = "#f53d3d",
  F6896A = "#f6896a",
  F7Dcc7 = "#f7dcc7",
  F88379 = "#f88379",
  Fa7589 = "#fa7589",
  Ff0000 = "#ff0000",
  Ff5252 = "#ff5252",
  Ff9D85 = "#ff9d85",
  Ffc9C2 = "#ffc9c2",
  Ffd9Cc = "#ffd9cc",
  Fffffa = "#fffffa",
  Ffffff = "#ffffff",
  The000000 = "#000000",
  The00F1F5 = "#00f1f5",
  The29662B = "#29662b",
  The353769 = "#353769",
  The3Cb450 = "#3cb450",
  The3Da5E6 = "#3da5e6",
  The498392 = "#498392",
  The640C0C = "#640c0c",
  The6E047C = "#6e047c",
  The721313 = "#721313",
  The7E6D6D = "#7e6d6d",
  The805A46 = "#805a46",
  The8A1930 = "#8a1930",
  The93Caec = "#93caec",
  The94B1F5 = "#94b1f5",
  The9B8703 = "#9b8703",
}

export enum NameInternalEnum {
  Azul = "Azul",
  Bicolor = "Bicolor",
  Blanco = "Blanco",
  Cocoa = "Cocoa",
  Coral = "Coral",
  Corazones = "Corazones",
  Dorado = "Dorado",
  Estampado = "Estampado",
  Estampado1 = "Estampado 1",
  Flores = "Flores ",
  Gris = "Gris",
  Lila = "Lila",
  Marfil = "Marfil",
  Melón = "Melón",
  Menta = "Menta ",
  Mora = "Mora",
  NameRosa = "Rosa ",
  Negro = "Negro",
  NegroEst = "Negro Est",
  Piel = "Piel",
  Puntos = "Puntos",
  Rojo = "Rojo",
  Rosa = "Rosa",
  Rosado = "Rosado",
  Surtido = "Surtido",
  Verde = "Verde",
  Vino = "Vino",
}

export interface Cover {
  webp:       Jpg;
  jpg:        Jpg;
  imgwebp?:   string;
  imgjpg?:    string;
  thumbnail?: string;
}

export interface Jpg {
  S900x1300: string;
  S400x578:  string;
  S200x289:  string;
  S150x217:  string;
}

export interface Inventory {
  id:           number;
  warehouse_id: number;
  product_id:   number;
  stock:        number;
  available:    number;
  reserved:     number;
  active:       number;
  created_at?:   Date;
  updated_at?:   Date;
  warehouse?:    Warehouse;
  product?:      InventoryProduct;
}

export interface InventoryProduct {
  id:                number;
  type:              Type;
  provider_id:       number;
  category_id:       number;
  categories:        Categories;
  size_id:           number;
  color_id:          number;
  owner_user_id:     number;
  sku:               string;
  reference:         string;
  barcode:           string;
  price:             string;
  cost:              string;
  new_price:         string;
  new_cost:          string;
  state:             number;
  description:       string;
  active:            number;
  numeric_reference: null;
  images:            null | string;
  changeable:        number;
  shipping_width:    string;
  shipping_height:   string;
  shipping_long:     string;
  shipping_weight:   string;
  shipping_volume:   string;
  created_at:        Date;
  updated_at:        string;
  product_id:        number;
  color:             FluffyColor;
  size:              Size;
}

export interface FluffyColor {
  id:            number;
  name:          NameInternalEnum;
  name_internal: NameInternalEnum;
  red:           number | null;
  green:         number | null;
  blue:          number | null;
  created_at:    Date;
  owner_user_id: number;
  active:        number;
  image:         Logo | null;
  html:          HTML;
}

export interface Size {
  id:             number;
  owner_user_id?: number;
  cluster?:       number;
  value:          string;
  created_at?:    Date;
  active?:        number;
}

export enum Type {
  Boxer = "boxer",
  Bralette = "bralette",
  Brasier = "brasier",
  BrasierPushup = "brasier-pushup",
  Brasilera = "brasilera",
  Panty = "panty",
  Pijama = "pijama",
  Top = "top",
}

export interface Warehouse {
  id:            number;
  name:          WarehouseName;
  shop_id:       number;
  owner_user_id: number;
  active:        number;
  created_at:    Date;
  warehouse_id:  number;
}

export enum WarehouseName {
  Mayoristas = "Mayoristas",
}

export enum InventoryStatus {
  Error = "error",
  Out = "out",
}

export interface Shipping {
  width:  number | null;
  height: number | null;
  long:   number | null;
  weight: number | null;
  volume: number | null;
}

export interface ShippingChecked {
  user:      PaymentUser;
  createdAt: CreatedAtClass;
}

export interface Shop {
  name:   WarehouseName;
  shopId: number;
}

export interface Summary {
  shipping:  number;
  discount:  number;
  tax:       number;
  totalPaid: number;
  subtotal:  number;
  total:     number;
}

export interface DatumUser {
  userId: number;
  name:   UserName;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toData(json: string): Data[] {
      return cast(JSON.parse(json), a(r("Data")));
  }

  public static dataToJson(value: Data[]): string {
      return JSON.stringify(uncast(value, a(r("Data"))), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
  if (key) {
      throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
  }
  throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
      typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
      const map: any = {};
      typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
      typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
      if (typeof typ === typeof val) return val;
      return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
      // val must validate against one typ in typs
      const l = typs.length;
      for (let i = 0; i < l; i++) {
          const typ = typs[i];
          try {
              return transform(val, typ, getProps);
          } catch (_) {}
      }
      return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
      if (cases.indexOf(val) !== -1) return val;
      return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
      // val must be an array with no invalid elements
      if (!Array.isArray(val)) return invalidValue("array", val);
      return val.map(el => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
      if (val === null) {
          return null;
      }
      const d = new Date(val);
      if (isNaN(d.valueOf())) {
          return invalidValue("Date", val);
      }
      return d;
  }

  function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
      if (val === null || typeof val !== "object" || Array.isArray(val)) {
          return invalidValue("object", val);
      }
      const result: any = {};
      Object.getOwnPropertyNames(props).forEach(key => {
          const prop = props[key];
          const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
          result[prop.key] = transform(v, prop.typ, getProps, prop.key);
      });
      Object.getOwnPropertyNames(val).forEach(key => {
          if (!Object.prototype.hasOwnProperty.call(props, key)) {
              result[key] = transform(val[key], additional, getProps, key);
          }
      });
      return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
      if (val === null) return val;
      return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === "object" && typ.ref !== undefined) {
      typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
      return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
          : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
          : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  "Data": o([
      { json: "_id", js: "_id", typ: r("ID") },
      { json: "summary", js: "summary", typ: r("Summary") },
      { json: "orderId", js: "orderId", typ: r("ID") },
      { json: "shop", js: "shop", typ: r("Shop") },
      { json: "user", js: "user", typ: r("DatumUser") },
      { json: "customer", js: "customer", typ: r("Customer") },
      { json: "payments", js: "payments", typ: a(r("Payment")) },
      { json: "products", js: "products", typ: a(r("ProductElement")) },
      { json: "createdAt", js: "createdAt", typ: r("CreatedAtClass") },
      { json: "updatedAt", js: "updatedAt", typ: r("CreatedAtClass") },
      { json: "number", js: "number", typ: 0 },
      { json: "__v", js: "__v", typ: 0 },
      { json: "checked", js: "checked", typ: u(undefined, true) },
  ], false),
  "ID": o([
      { json: "$oid", js: "$oid", typ: "" },
  ], false),
  "CreatedAtClass": o([
      { json: "$date", js: "$date", typ: Date },
  ], false),
  "Customer": o([
      { json: "user_id", js: "user_id", typ: 0 },
      { json: "customerId", js: "customerId", typ: r("ID") },
      { json: "firstName", js: "firstName", typ: "" },
      { json: "lastName", js: "lastName", typ: "" },
      { json: "identification", js: "identification", typ: "" },
      { json: "phone", js: "phone", typ: "" },
  ], false),
  "Payment": o([
      { json: "totalPaid", js: "totalPaid", typ: 0 },
      { json: "tax", js: "tax", typ: 0 },
      { json: "_id", js: "_id", typ: r("ID") },
      { json: "paymentMethod", js: "paymentMethod", typ: r("PaymentMethod") },
      { json: "paymentData", js: "paymentData", typ: r("PaymentData") },
      { json: "change", js: "change", typ: u(undefined, 0) },
      { json: "paymentStatus", js: "paymentStatus", typ: u(undefined, "") },
      { json: "createdAt", js: "createdAt", typ: u(undefined, r("CreatedAtClass")) },
      { json: "updatedAt", js: "updatedAt", typ: u(undefined, r("CreatedAtClass")) },
      { json: "user", js: "user", typ: u(undefined, r("PaymentUser")) },
  ], false),
  "PaymentData": o([
      { json: "_id", js: "_id", typ: u(r("ID"), r("IDIDEnum")) },
      { json: "name", js: "name", typ: r("PaymentMethod") },
      { json: "title", js: "title", typ: r("Title") },
      { json: "description", js: "description", typ: r("Description") },
      { json: "paymentInstructions", js: "paymentInstructions", typ: "" },
      { json: "active", js: "active", typ: u(undefined, true) },
      { json: "createdAt", js: "createdAt", typ: u(undefined, u(r("CreatedAtClass"), Date)) },
      { json: "updatedAt", js: "updatedAt", typ: u(undefined, u(r("CreatedAtClass"), Date)) },
      { json: "__v", js: "__v", typ: u(undefined, 0) },
      { json: "carrier", js: "carrier", typ: u(undefined, null) },
      { json: "config", js: "config", typ: u(undefined, r("Config")) },
      { json: "logo", js: "logo", typ: u(undefined, r("Logo")) },
      { json: "customerCreditData", js: "customerCreditData", typ: u(undefined, r("CustomerCreditData")) },
  ], false),
  "Config": o([
      { json: "enableAppReseller", js: "enableAppReseller", typ: 0 },
      { json: "enablePOS", js: "enablePOS", typ: 0 },
      { json: "enableMultiPayments", js: "enableMultiPayments", typ: 0 },
      { json: "customerRequired", js: "customerRequired", typ: 0 },
      { json: "style", js: "style", typ: r("Style") },
  ], false),
  "Style": o([
      { json: "color", js: "color", typ: "" },
      { json: "backgroundColor", js: "backgroundColor", typ: "" },
  ], false),
  "CustomerCreditData": o([
      { json: "customerCreditId", js: "customerCreditId", typ: u(r("ID"), "") },
      { json: "customerCreditStatementId", js: "customerCreditStatementId", typ: r("ID") },
  ], false),
  "Logo": o([
      { json: "tags", js: "tags", typ: a("any") },
      { json: "_id", js: "_id", typ: r("LogoID") },
      { json: "createdAt", js: "createdAt", typ: Date },
      { json: "updatedAt", js: "updatedAt", typ: Date },
      { json: "__v", js: "__v", typ: 0 },
      { json: "path", js: "path", typ: "" },
      { json: "imageSizes", js: "imageSizes", typ: r("ImageSizes") },
  ], false),
  "ImageSizes": o([
      { json: "imgwebp", js: "imgwebp", typ: "" },
      { json: "imgjpg", js: "imgjpg", typ: "" },
      { json: "thumbnail", js: "thumbnail", typ: "" },
  ], false),
  "PaymentUser": o([
      { json: "user_id", js: "user_id", typ: 0 },
      { json: "name", js: "name", typ: r("UserName") },
  ], false),
  "ProductElement": o([
      { json: "shippingChecked", js: "shippingChecked", typ: r("ShippingChecked") },
      { json: "discount", js: "discount", typ: 0 },
      { json: "_id", js: "_id", typ: r("ID") },
      { json: "product_id", js: "product_id", typ: 0 },
      { json: "category_id", js: "category_id", typ: 0 },
      { json: "categories", js: "categories", typ: r("Categories") },
      { json: "warehouse_id", js: "warehouse_id", typ: 0 },
      { json: "quantity", js: "quantity", typ: 0 },
      { json: "reference", js: "reference", typ: "" },
      { json: "description", js: "description", typ: "" },
      { json: "barcode", js: "barcode", typ: "" },
      { json: "price", js: "price", typ: 0 },
      { json: "wholesale_price", js: "wholesale_price", typ: 0 },
      { json: "reseller_price", js: "reseller_price", typ: 0 },
      { json: "color", js: "color", typ: r("PurpleColor") },
      { json: "size", js: "size", typ: r("Size") },
      { json: "cover", js: "cover", typ: u(undefined, r("Cover")) },
      { json: "shipping", js: "shipping", typ: r("Shipping") },
      { json: "unitPrice", js: "unitPrice", typ: 0 },
      { json: "cost", js: "cost", typ: 0 },
      { json: "productType", js: "productType", typ: u(undefined, r("Type")) },
      { json: "salePriceUnit", js: "salePriceUnit", typ: 0 },
      { json: "salePriceTotal", js: "salePriceTotal", typ: 0 },
      { json: "inventoryStatus", js: "inventoryStatus", typ: u(undefined, r("InventoryStatus")) },
      { json: "inventory", js: "inventory", typ: u(undefined, r("Inventory")) },
  ], false),
  "PurpleColor": o([
      { json: "id", js: "id", typ: 0 },
      { json: "name", js: "name", typ: r("NameInternalEnum") },
      { json: "image", js: "image", typ: u(r("Logo"), null, "") },
      { json: "html", js: "html", typ: u(r("HTML"), null) },
      { json: "name_internal", js: "name_internal", typ: u(undefined, r("NameInternalEnum")) },
      { json: "red", js: "red", typ: u(undefined, u(0, null)) },
      { json: "green", js: "green", typ: u(undefined, u(0, null)) },
      { json: "blue", js: "blue", typ: u(undefined, u(0, null)) },
      { json: "created_at", js: "created_at", typ: u(undefined, Date) },
      { json: "owner_user_id", js: "owner_user_id", typ: u(undefined, 0) },
      { json: "active", js: "active", typ: u(undefined, 0) },
  ], false),
  "Cover": o([
      { json: "webp", js: "webp", typ: r("Jpg") },
      { json: "jpg", js: "jpg", typ: r("Jpg") },
      { json: "imgwebp", js: "imgwebp", typ: u(undefined, "") },
      { json: "imgjpg", js: "imgjpg", typ: u(undefined, "") },
      { json: "thumbnail", js: "thumbnail", typ: u(undefined, "") },
  ], false),
  "Jpg": o([
      { json: "S900x1300", js: "S900x1300", typ: "" },
      { json: "S400x578", js: "S400x578", typ: "" },
      { json: "S200x289", js: "S200x289", typ: "" },
      { json: "S150x217", js: "S150x217", typ: "" },
  ], false),
  "Inventory": o([
      { json: "id", js: "id", typ: 0 },
      { json: "warehouse_id", js: "warehouse_id", typ: 0 },
      { json: "product_id", js: "product_id", typ: 0 },
      { json: "stock", js: "stock", typ: 0 },
      { json: "available", js: "available", typ: 0 },
      { json: "reserved", js: "reserved", typ: 0 },
      { json: "active", js: "active", typ: 0 },
      { json: "created_at", js: "created_at", typ: Date },
      { json: "updated_at", js: "updated_at", typ: Date },
      { json: "warehouse", js: "warehouse", typ: r("Warehouse") },
      { json: "product", js: "product", typ: r("InventoryProduct") },
  ], false),
  "InventoryProduct": o([
      { json: "id", js: "id", typ: 0 },
      { json: "type", js: "type", typ: r("Type") },
      { json: "provider_id", js: "provider_id", typ: 0 },
      { json: "category_id", js: "category_id", typ: 0 },
      { json: "categories", js: "categories", typ: r("Categories") },
      { json: "size_id", js: "size_id", typ: 0 },
      { json: "color_id", js: "color_id", typ: 0 },
      { json: "owner_user_id", js: "owner_user_id", typ: 0 },
      { json: "sku", js: "sku", typ: "" },
      { json: "reference", js: "reference", typ: "" },
      { json: "barcode", js: "barcode", typ: "" },
      { json: "price", js: "price", typ: "" },
      { json: "cost", js: "cost", typ: "" },
      { json: "new_price", js: "new_price", typ: "" },
      { json: "new_cost", js: "new_cost", typ: "" },
      { json: "state", js: "state", typ: 0 },
      { json: "description", js: "description", typ: "" },
      { json: "active", js: "active", typ: 0 },
      { json: "numeric_reference", js: "numeric_reference", typ: null },
      { json: "images", js: "images", typ: u(null, "") },
      { json: "changeable", js: "changeable", typ: 0 },
      { json: "shipping_width", js: "shipping_width", typ: "" },
      { json: "shipping_height", js: "shipping_height", typ: "" },
      { json: "shipping_long", js: "shipping_long", typ: "" },
      { json: "shipping_weight", js: "shipping_weight", typ: "" },
      { json: "shipping_volume", js: "shipping_volume", typ: "" },
      { json: "created_at", js: "created_at", typ: Date },
      { json: "updated_at", js: "updated_at", typ: "" },
      { json: "product_id", js: "product_id", typ: 0 },
      { json: "color", js: "color", typ: r("FluffyColor") },
      { json: "size", js: "size", typ: r("Size") },
  ], false),
  "FluffyColor": o([
      { json: "id", js: "id", typ: 0 },
      { json: "name", js: "name", typ: r("NameInternalEnum") },
      { json: "name_internal", js: "name_internal", typ: r("NameInternalEnum") },
      { json: "red", js: "red", typ: u(0, null) },
      { json: "green", js: "green", typ: u(0, null) },
      { json: "blue", js: "blue", typ: u(0, null) },
      { json: "created_at", js: "created_at", typ: Date },
      { json: "owner_user_id", js: "owner_user_id", typ: 0 },
      { json: "active", js: "active", typ: 0 },
      { json: "image", js: "image", typ: u(r("Logo"), null) },
      { json: "html", js: "html", typ: r("HTML") },
  ], false),
  "Size": o([
      { json: "id", js: "id", typ: 0 },
      { json: "owner_user_id", js: "owner_user_id", typ: u(undefined, 0) },
      { json: "cluster", js: "cluster", typ: u(undefined, 0) },
      { json: "value", js: "value", typ: "" },
      { json: "created_at", js: "created_at", typ: u(undefined, Date) },
      { json: "active", js: "active", typ: u(undefined, 0) },
  ], false),
  "Warehouse": o([
      { json: "id", js: "id", typ: 0 },
      { json: "name", js: "name", typ: r("WarehouseName") },
      { json: "shop_id", js: "shop_id", typ: 0 },
      { json: "owner_user_id", js: "owner_user_id", typ: 0 },
      { json: "active", js: "active", typ: 0 },
      { json: "created_at", js: "created_at", typ: Date },
      { json: "warehouse_id", js: "warehouse_id", typ: 0 },
  ], false),
  "Shipping": o([
      { json: "width", js: "width", typ: u(3.14, null) },
      { json: "height", js: "height", typ: u(3.14, null) },
      { json: "long", js: "long", typ: u(3.14, null) },
      { json: "weight", js: "weight", typ: u(3.14, null) },
      { json: "volume", js: "volume", typ: u(3.14, null) },
  ], false),
  "ShippingChecked": o([
      { json: "user", js: "user", typ: r("PaymentUser") },
      { json: "createdAt", js: "createdAt", typ: r("CreatedAtClass") },
  ], false),
  "Shop": o([
      { json: "name", js: "name", typ: r("WarehouseName") },
      { json: "shopId", js: "shopId", typ: 0 },
  ], false),
  "Summary": o([
      { json: "shipping", js: "shipping", typ: 0 },
      { json: "discount", js: "discount", typ: 0 },
      { json: "tax", js: "tax", typ: 0 },
      { json: "totalPaid", js: "totalPaid", typ: 0 },
      { json: "subtotal", js: "subtotal", typ: 0 },
      { json: "total", js: "total", typ: 0 },
  ], false),
  "DatumUser": o([
      { json: "userId", js: "userId", typ: 0 },
      { json: "name", js: "name", typ: r("UserName") },
  ], false),
  "IDIDEnum": [
      "6108163f12ec83034a62a273",
      "6108166712ec83034a62a274",
      "6108169312ec83034a62a275",
      "614cf241dc4de451679a894c",
  ],
  "Description": [
      "<p>Paga con transferencia por Bancolombia</p>",
      "<p>Pago a crédito</p>",
      "<p>Pago contra entrega, pagas al recibir el pedido</p>",
      "<p>Pago En efectivo directo en nuestra tienda de mayorista</p>",
  ],
  "LogoID": [
      "60b8d0b4f0ed6063dadd4c96",
      "60b8dfbaf0ed6063dadd4c98",
      "60bf5c26bfa898240ed27032",
      "60bf5d35bfa898240ed27033",
      "60bf5e5dbfa898240ed27034",
      "60c0b894dc5d3f4974576f3c",
      "60c9e1387470e22994dcd259",
      "611556311ac7f71db9b2784f",
      "6116c8c685b47c2f2799cf86",
      "6116caf585b47c2f2799cf87",
      "6116cf5785b47c2f2799dd98",
      "611d16211ba49e32eacb7dd6",
      "611d494f1ba49e32eacc2d92",
      "61264b481e60df39c37ebd8f",
      "615da92583c43d3b322a741e",
      "615dc93383c43d3b322a7449",
      "615dcafb83c43d3b322a744a",
      "615dcb0483c43d3b322a744b",
      "6160531f074aeb62c49e8345",
  ],
  "PaymentMethod": [
      "bankwire",
      "cash",
      "cashondelivery",
      "credit",
  ],
  "Title": [
      "Bancolombia",
      "Crédito",
      "Efectivo",
      "Pago contra entrega",
  ],
  "UserName": [
      "Admin POS",
      "Ana Maria Perez G",
      "Diana Buritica",
      "Laura Ciro Velasquez",
      "Maria Isabel Sepulveda Montero",
      "Meliza Castaño",
      "Viviana Betancur",
  ],
  "Categories": [
      "[[21]]",
      "[46]",
      "[20]",
      "[[20],[[22],[46]]]",
      "[21]",
      "[[[21],[56]],[[21],[63]],[[21],[66]],[[21],[84]]]",
      "[[[21],[59]],[[21],[62]],[[21],[65]]]",
      "[[[21],[60]]]",
      "[[[21],[60]],[[21],[62]],[[21],[65]]]",
      "[[[21],[60]],[[21],[63]]]",
      "[[[21],[60]],[[21],[63]],[[21],[65]]]",
      "[[[21],[61]],[[21],[63]],[[21],[66]],[[21],[84]]]",
      "[[[21],[63]],[[21],[66]],[[21],[84]]]",
      "[[[21],[84]]]",
      "[[[21],[84]],[[21],[63]],[[21],[66]]]",
      "[[[21],[84]],[[21],[66]],[[21],[63]]]",
      "[22]",
      "[[[22],[46]]]",
      "[[[22],[70]]]",
      "[[[22],[71]]]",
      "[[[22],[85]]]",
      "[23]",
      "[[[23],[77]]]",
      "[[[23],[80]]]",
      "[38]",
      "[[46]]",
      "[[[49],[59]]]",
      "[[[49],[60]]]",
      "[50]",
      "[[[50],[69]]]",
      "[59]",
      "[60]",
      "[67]",
      "[69]",
      "[[80]]",
  ],
  "HTML": [
      "#a8e5e6",
      "#acdccf",
      "#b1a3c8",
      "#baa312",
      "#c181a9",
      "#d8c2ff",
      "#d9ec4b",
      "#e1d4f7",
      "#ea7bc1",
      "#f2e5ce",
      "#f3f3f1",
      "#f51414",
      "#f53d3d",
      "#f6896a",
      "#f7dcc7",
      "#f88379",
      "#fa7589",
      "#ff0000",
      "#ff5252",
      "#ff9d85",
      "#ffc9c2",
      "#ffd9cc",
      "#fffffa",
      "#ffffff",
      "#000000",
      "#00f1f5",
      "#29662b",
      "#353769",
      "#3cb450",
      "#3da5e6",
      "#498392",
      "#640c0c",
      "#6e047c",
      "#721313",
      "#7e6d6d",
      "#805a46",
      "#8a1930",
      "#93caec",
      "#94b1f5",
      "#9b8703",
  ],
  "NameInternalEnum": [
      "Azul",
      "Bicolor",
      "Blanco",
      "Cocoa",
      "Coral",
      "Corazones",
      "Dorado",
      "Estampado",
      "Estampado 1",
      "Flores ",
      "Gris",
      "Lila",
      "Marfil",
      "Melón",
      "Menta ",
      "Mora",
      "Rosa ",
      "Negro",
      "Negro Est",
      "Piel",
      "Puntos",
      "Rojo",
      "Rosa",
      "Rosado",
      "Surtido",
      "Verde",
      "Vino",
  ],
  "Type": [
      "boxer",
      "bralette",
      "brasier",
      "brasier-pushup",
      "brasilera",
      "panty",
      "pijama",
      "top",
  ],
  "WarehouseName": [
      "Mayoristas",
  ],
  "InventoryStatus": [
      "error",
      "out",
  ],
};
