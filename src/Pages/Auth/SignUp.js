import React from "react";
import { Box } from "@mui/material";
import styled from "styled-components";
import imgLogoBack01 from "../../Assets/Images/background/login_human01.png";
import CustomInputBox from "../../Components/CustomInputBox";
import CustomMainButton from "../../Components/CustomMainButton";
import imgGoogle01 from "../../Assets/Images/icons/google01.png";
import imgFacebook01 from "../../Assets/Images/icons/facebook01.png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  return (
    <StyledComponent>
      <PartMax01>
        <PartImage01>
          <ImageLogoBack01>
            <img src={imgLogoBack01} width={"100%"} height={"100%"} alt="" />
          </ImageLogoBack01>
          <TextTitle01>Hey there, Welcome aboard</TextTitle01>
          <TextDescription01>
            just a couple of clicks and we start
          </TextDescription01>
          <ButtonBack01
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
          >
            <CustomMainButton
              width={"100%"}
              height={"100%"}
              text={"Back"}
              backColor={""}
              color={"white"}
              border={"2px solid white"}
              borderRadius={"100px"}
              boxShadow={"0px 0px 0px white"}
            />
          </ButtonBack01>
        </PartImage01>

        <PartLogin01>
          <PartContent01>
            <TextLogin01>Sign Up To Get Started</TextLogin01>
            <InputBox01>
              <CustomInputBox
                width={"100%"}
                height={"100%"}
                text={"Name"}
                icon={<PersonOutlineOutlinedIcon />}
                type={"text"}
              />
            </InputBox01>
            <InputBox01>
              <CustomInputBox
                width={"100%"}
                height={"100%"}
                text={"Email"}
                icon={<EmailOutlinedIcon />}
                type={"text"}
              />
            </InputBox01>

            <InputBox01>
              <CustomInputBox
                width={"100%"}
                height={"100%"}
                text={"Password"}
                icon={<LockOutlinedIcon />}
                type={"password"}
              />
            </InputBox01>
            <InputBox01>
              <CustomInputBox
                width={"100%"}
                height={"100%"}
                text={"Confirm Password"}
                icon={<LockOutlinedIcon />}
                type={"password"}
              />
            </InputBox01>
         
          </PartContent01>
        </PartLogin01>
      </PartMax01>
    </StyledComponent>
  );
};

const StyledComponent = styled(Box)`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
`;

const PartMax01 = styled(Box)`
  display: flex;
  width: 100%;
  max-width: 1920px;
`;

const PartImage01 = styled(Box)`
  display: flex;
  position: relative;
  flex: 1.5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #005e95;

  transition: 0.5s;
  @media (max-width: 1400px) {
    flex: 1;
  }
`;

const ButtonBack01 = styled(Box)`
  display: flex;
  position: absolute;
  left: 50px;
  top: 50px;
  height: 40px;
  width: 90px;
`;

const PartLogin01 = styled(Box)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #faf9ff;
`;

const PartContent01 = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 450px;
  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 400px;
  }
`;

const ImageLogoBack01 = styled(Box)`
  width: 450px;
  height: 450px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    width: 300px;
    height: 300px;
  }
`;

const TextTitle01 = styled(Box)`
  margin-top: 30px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 200%;
  /* identical to box height, or 80px */
  display: flex;
  align-items: center;
  text-align: center;
  /* Palette / jnt-white-color */
  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 30px;
  }
`;

const TextDescription01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 200%;
  /* identical to box height, or 44px */
  display: flex;
  align-items: center;
  text-align: center;
  /* Palette / jnt-white-color */
  color: #ffffff;

  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 16px;
  }
`;

const TextLogin01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 136%;
  /* identical to box height, or 44px */

  text-align: center;
  text-transform: capitalize;
  margin-bottom: 30px;
  color: #0d1942;
`;

const InputBox01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 70px;
  margin-top: 20px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    height: 60px;
  }
`;

const TextAlert01 = styled(Box)`
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-top: 10px;
  height: 25px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  /* #F63E48 */
  color: #f63e48;
  transition: 0.5s;
  @media (max-width: 1400px) {
    font-size: 16px;
  }
`;

const ButtonLogin01 = styled(Box)`
  display: flex;
  width: 100%;
  height: 70px;
  margin-top: 10px;

  transition: 0.5s;
  @media (max-width: 1400px) {
    height: 60px;
  }
`;

const PartBorder01 = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 30px;
  align-items: center;
`;
const PartLine01 = styled(Box)`
  display: flex;
  height: 1px;
  flex: 1;
  background-color: #716f96;
  opacity: 0.3;
`;

const TextOr01 = styled(Box)`
  display: flex;
  font-family: "Rubik";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: #716f96;
  margin-left: 10px;
  margin-right: 10px;
`;

const PartOtherSign01 = styled(Box)`
  display: flex;
  width: 100%;
  margin-top: 30px;
  justify-content: space-between;
`;

const EachSign01 = styled(Box)`
  display: flex;
  flex: 1;
  height: 60px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 1px solid rgba(113, 111, 150, 0.2);
  border-radius: 1000px;

  cursor: pointer;

  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px black;
    text-shadow: 0px 0px 3px #005e95;
  }
  &:active {
    box-shadow: 0px 0px 5px black;
    text-shadow: 0px 0px 0px #005e95;
  }
`;

const IconEachSign01 = styled(Box)`
  display: flex;
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

const TextEachSign01 = styled(Box)`
  font-family: "Outfit";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
  /* identical to box height */

  display: flex;
  align-items: center;
  text-align: center;

  color: #005e95;
`;

const PartAccountSign01 = styled(Box)`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 30px;
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
`;

const TextLeft01 = styled(Box)`
  margin-right: 10px;
  color: #716f96;
`;
const TextRight01 = styled(Box)`
  color: #005e95;

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    text-shadow: 0px 0px 3px;
  }
  &:active {
    text-shadow: 0px 0px 0px;
  }
`;
export default LogIn;