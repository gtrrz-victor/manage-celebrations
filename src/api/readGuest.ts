import { API_URL } from "./constants";

export interface GuestContainer {
  Item: Guest;
}

export interface Guest {
  phoneNumber: string;
  id: string;
  name: string;
  isAssisting: boolean;
  additionalPeople: number;
  address?: string;
}

export const readGuest = async (userId: string): Promise<GuestContainer> => {
  const res = await fetch(`${API_URL}/${userId}`, {
    mode: "cors",
    referrerPolicy: "origin-when-cross-origin",
  });
  return res.json();
};
