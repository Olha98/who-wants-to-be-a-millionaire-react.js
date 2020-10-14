import { useMediaQuery } from 'react-responsive';

export const size = {
  mobileS: '0px',
  mobileL: '414px',
  beforeTablet: '960px',
  tablet: '960px',
  laptop: '1280px',
  desktop: '1920px',
  beforeDesktop: '1920px',
  beforeBigDevice: '1279px',
  beforeMobileL: '414px'
};

const device = {
  mobileS: `(max-width: ${size.beforeMobileL})`,
  mobileL: `(min-width: ${size.mobileL}) and (max-width: ${size.beforeTablet})`,
  tablet: `(min-width: ${size.tablet}) and (max-width: ${size.beforeBigDevice})`,
  laptop: `(min-width: ${size.laptop}) and (max-width: ${size.beforeDesktop})`,
  desktop: `(min-width: ${size.desktop})`,
  largeDevice: `(min-width: ${size.laptop})`,
  littleDevice: `(max-width: ${size.beforeBigDevice})`,
  mobile: `(max-width: ${size.beforeTablet})`,
  tabletToLarge: `(min-width: ${size.tablet})`
};


export const Mobile = ({ children }) => {
  const isMobileQuery = useMediaQuery({
    query: device.mobile
  });
  return isMobileQuery && children;
};

export const MobileS = ({ children }) => {
  const isMobileSQuery = useMediaQuery({
    query: device.mobileS
  });
  return isMobileSQuery && children;
};

export const MobileL = ({ children }) => {
  const isMobileLQuery = useMediaQuery({
    query: device.mobileL
  });
  return isMobileLQuery && children;
};

export const Tablet = ({ children }) => {
  const isTabletQuery = useMediaQuery({
    query: device.tablet
  });
  return isTabletQuery && children;
};

export const Laptop = ({ children }) => {
  const isLaptopQuery = useMediaQuery({
    query: device.laptop
  });
  return isLaptopQuery && children;
};

export const Desktop = ({ children }) => {
  const isDesktopQuery = useMediaQuery({
    query: device.desktop
  });
  return isDesktopQuery && children;
};

export const TabletToLarge = ({ children }) => {
  const isTabletToLargeQuery = useMediaQuery({
    query: device.tabletToLarge
  });
  return isTabletToLargeQuery && children;
};

export default device;
