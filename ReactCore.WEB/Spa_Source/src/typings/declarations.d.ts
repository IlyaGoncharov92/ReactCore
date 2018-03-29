declare type HashObject = { [key: string]: any };

declare interface GenericElementRef<T extends HTMLElement>
{
  nativeElement: T;
}
