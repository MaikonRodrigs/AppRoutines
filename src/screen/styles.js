import styled from "styled-components";
import { TasksApp } from "@styled-icons/fluentui-system-filled/TasksApp";
import { RightArrowCircle } from "@styled-icons/boxicons-regular/RightArrowCircle";
import { MoreHorizontalOutline } from "@styled-icons/evaicons-outline/MoreHorizontalOutline";

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;
  flex-direction: row;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  background: #fff;
  box-shadow: var(--shadow);
  border-radius: 16px;  
  z-index: 10;

`;

export const NextCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 400px;
  background: #fff;
  box-shadow: var(--shadow);
  border-radius: 16px;
  z-index: 0;

  opacity: .5;
  filter: blur(.2rem);

  margin-left: -120px;

`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const TasksAppIcon = styled(TasksApp)`
  width: 25px;
  color: white;
`;
export const User = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: black;
  padding: 1px 10px;
  border-radius: 16px;
  background-color: white;
  text-transform: uppercase;
`;

export const Img = styled.div`
  background-image: url(${({ background }) => background});
  /* width: 190px; */
  /* background: blue; */
  height: 320px;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: auto;
  object-position: 0% 100%;
  border-radius: 16px;  

`;

export const Description = styled.div`
  color: black;
  font-size: 18px;
  font-weight: 900;
  margin-top: 20px;
  padding: 0 20px 10px;
  letter-spacing: -0.9px;
  text-align: left;
`;

export const DoMore = styled.span`
  text-transform: lowercase;
  text-transform: none;
  font-size: 14px;
  color: #9f9f9f;
  padding: 0 20px;
`;

export const RowTimed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 35px;
`;

export const MoreIcon = styled(MoreHorizontalOutline)`
  color: var(--black);
  width: 30px;
  margin-top: 7px;
  cursor: pointer;
`;

export const Timed = styled.div`
  color: var(--black);
  font-size: 30px;
  font-weight: 600;
`;

export const NextMore = styled.div`
  /* margin-top: 5px; */
`;

export const TimedNext = styled.span`
  font-size: 12px;
  color: #818181;
  /* padding: 0 22px; */
`;

export const ArrowCircleRightIcon = styled(RightArrowCircle)`
  color: #818181;
  width: 15px;
  cursor: pointer;
  margin-right: 6px;
`;
