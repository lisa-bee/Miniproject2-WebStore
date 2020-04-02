export const shippingAlternatives: ShippingOption[] = [
  {
    id: "1",
    price: "49",
    label: "PostNord (1 day) + 49 SEK",
    deliveryTime: 1
  },
  {
    id: "2",
    price: "29",
    label: "DHL (3 days) + 29 SEK",
    deliveryTime: 3
  },
  {
    id: "3",
    price: "0",
    label: "Schenker (5 days) + 0 SEK",
    deliveryTime: 5
  }
];

export interface ShippingOption {
  id: string;
  price: string;
  label: string;
  deliveryTime: number;
}
