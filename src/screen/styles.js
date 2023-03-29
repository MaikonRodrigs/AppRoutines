import styled from "styled-components";
import { ArrowUpCircle } from "@styled-icons/bootstrap/ArrowUpCircle";
import { NightShelter } from "@styled-icons/material/NightShelter";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
`;

export const Row = styled.div`
  /* display: ${({ display }) => display}; */
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  top: 0;
  right: 0;
  box-shadow: var(--shadow);
  border-radius: 16px;
  background-color: blueviolet;
  /* position: relative; */
  background-color: ${({ backgroundColor }) => backgroundColor};
`;
export const Card = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Img = styled.img`
  width: 240px;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 600;
  /* letter-spacing: 2px; */
  margin-top: 40px;
  text-transform: uppercase;
`;

export const Hour = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 104px;
  font-weight: 600;
  margin-top: 140px;
  /* letter-spacing: -7px; */
  
  /* position: absolute;
  margin: 0 auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */

  /* border: 12px solid rgba(0, 0, 0, .1);
  padding: 70px;
  width: 140px;
  height: 140px;
  border-radius: 9999px;

  background-color: rgba(0, 0, 0, .7); */

  
  /* &::after {
    content: "h";
    font-size: 22px;
    margin-top: 40px;
  } */
`;
export const Details = styled.div`
  font-size: 16px;
  font-weight: 600;
`;
export const Next = styled.div`
  font-size: 16px;

  margin-top: 100px;
  border: 1px solid #fff;
  padding: 2px 20px;
  border-radius: 9999px;
`;

export const Sleep = styled.div`
  font-size: 33px;
`;

export const NightShelterIcon = styled(NightShelter)`
  width: 302px;
  color: #fff;
`;
