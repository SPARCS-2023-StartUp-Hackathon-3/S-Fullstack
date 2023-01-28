export default interface IPostPostReqDto {
  imageUrl?: string;
  title: string;
  color: string;
  desc: string;
  caption?: string;
  parentId?: number;
  userId: number;
}
