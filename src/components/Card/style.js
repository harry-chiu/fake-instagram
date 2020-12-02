import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
`;

export const Account = styled.span`
  flex: 1;
  display: inline-block;
  margin: 0;
  padding: 0 16px;
  font-size: 13px;
`;

export const Settings = styled.div`
  & > svg {
    font-size: 20px;
  }
`;

export const Body = styled.div``;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: calc(3 / 4 * 100%);
  background: #101010;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  object-fit: cover;
`;

export const FeatureBar = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  background: #000000;
`;

export const MainFeature = styled.div`
  flex: 1;

  & > svg {
    margin-left: 12px;
    font-size: 24px;

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const SubFeature = styled.div`
  & > svg {
    font-size: 24px;
  }
`;

export const Likes = styled.p`
  margin: 0;
  padding: 0 16px;
  font-size: 13px;
`;

export const Footer = styled.div`
  margin-top: 8px;
`;

export const Content = styled.p`
  margin: 0;
  padding: 0 16px;
  font-size: 13px;
  white-space: pre-line;

  & > span {
    padding: 0 8px 0 0;
  }
`;
