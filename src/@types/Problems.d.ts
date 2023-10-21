declare interface IProblem {
  title: ?string;
  description: string;
  address: AddressType;
  imgUrl?: string;
  pix: string | Date;
  author: string;
  deadline: string;
}
