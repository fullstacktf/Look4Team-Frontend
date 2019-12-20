import * as React from "react";
import "./Profile.css";
import styled from "@emotion/styled";

export interface ProfileIconProps {}

const SVG = styled.svg`
  fill: #42a29e;
  transition: fill 0.4s ease;

  :hover {
    fill: #66fcf1;
  }
`;

const Profile = () => {
  return (
    <SVG
      width="30"
      height="30"
      viewBox="0 0 40 40"
      fill="#42a29e"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40 20C40 8.97236 31.0276 0 20 0C8.97236 0 0 8.97236 0 20C0 25.8247 2.50473 31.0749 6.49164 34.7331L6.47273 34.7498L7.12145 35.2967C7.16364 35.3324 7.20945 35.3615 7.25164 35.3964C7.59636 35.6822 7.95345 35.9535 8.31709 36.216C8.43491 36.3011 8.55273 36.3862 8.67273 36.4691C9.06109 36.7367 9.45964 36.9905 9.86691 37.2313C9.95564 37.2836 10.0451 37.3345 10.1345 37.3855C10.5804 37.6393 11.0356 37.8785 11.5018 38.0982C11.536 38.1142 11.5709 38.1287 11.6051 38.1447C13.1244 38.8509 14.7462 39.3695 16.4422 39.6756C16.4865 39.6836 16.5309 39.6916 16.576 39.6996C17.1025 39.7905 17.6349 39.8633 18.1738 39.912C18.2393 39.9178 18.3047 39.9215 18.3709 39.9273C18.9076 39.9716 19.4502 40 20 40C20.5447 40 21.0822 39.9716 21.616 39.9287C21.6836 39.9229 21.7513 39.9193 21.8189 39.9135C22.3535 39.8647 22.8815 39.7942 23.4029 39.7047C23.448 39.6967 23.4938 39.6887 23.5389 39.68C25.2095 39.3804 26.808 38.8735 28.3076 38.1855C28.3629 38.16 28.4189 38.136 28.4742 38.1098C28.9229 37.8989 29.3615 37.6713 29.7913 37.4291C29.8982 37.3687 30.0044 37.3076 30.1105 37.2451C30.5018 37.0145 30.8865 36.7738 31.2604 36.5178C31.3949 36.4262 31.5265 36.3295 31.6596 36.2335C31.9789 36.0036 32.2924 35.7665 32.5971 35.5185C32.6647 35.464 32.7375 35.4167 32.8036 35.3607L33.4691 34.8051L33.4495 34.7884C37.4713 31.1287 40 25.8545 40 20ZM1.45455 20C1.45455 9.77382 9.77382 1.45455 20 1.45455C30.2262 1.45455 38.5455 9.77382 38.5455 20C38.5455 25.5105 36.1273 30.4647 32.2989 33.864C32.0851 33.7164 31.8698 33.584 31.6495 33.4735L25.4916 30.3949C24.9389 30.1185 24.5956 29.5629 24.5956 28.9455V26.7949C24.7382 26.6189 24.8887 26.4196 25.0444 26.2007C25.8415 25.0749 26.4807 23.8225 26.9469 22.4749C27.8684 22.0371 28.4633 21.1193 28.4633 20.0829V17.5047C28.4633 16.8742 28.232 16.2625 27.8182 15.7818V12.3876C27.856 12.0102 27.9898 9.88 26.4487 8.12291C25.1084 6.59273 22.9389 5.81818 20 5.81818C17.0611 5.81818 14.8916 6.59273 13.5513 8.12218C12.0102 9.87927 12.144 12.0095 12.1818 12.3869V15.7811C11.7687 16.2618 11.5367 16.8735 11.5367 17.504V20.0822C11.5367 20.8829 11.896 21.6298 12.5113 22.1338C13.1004 24.4415 14.3127 26.1884 14.7607 26.7804V28.8851C14.7607 29.4785 14.4371 30.024 13.9156 30.3091L8.16509 33.4458C7.98182 33.5455 7.8 33.6618 7.61818 33.792C3.83709 30.3942 1.45455 25.4705 1.45455 20ZM30.8793 35.0051C30.6247 35.1898 30.3658 35.3687 30.1033 35.5396C29.9825 35.6182 29.8625 35.6967 29.7396 35.7731C29.3964 35.9855 29.0473 36.1876 28.6909 36.3767C28.6124 36.4182 28.5331 36.4575 28.4538 36.4982C27.6349 36.9178 26.7876 37.2785 25.9171 37.5716C25.8865 37.5818 25.856 37.5927 25.8247 37.6029C25.3687 37.7542 24.9069 37.8887 24.44 38.0044C24.4385 38.0044 24.4371 38.0051 24.4356 38.0051C23.9644 38.1215 23.4873 38.2182 23.0073 38.2975C22.9942 38.2996 22.9811 38.3025 22.968 38.3047C22.5164 38.3782 22.0611 38.4313 21.6044 38.4713C21.5236 38.4785 21.4429 38.4836 21.3615 38.4895C20.9098 38.5236 20.456 38.5455 20 38.5455C19.5389 38.5455 19.0793 38.5229 18.6218 38.4887C18.5425 38.4829 18.4633 38.4778 18.3847 38.4705C17.9236 38.4298 17.4647 38.3753 17.0102 38.3011C16.9898 38.2975 16.9695 38.2938 16.9491 38.2902C15.9876 38.1295 15.0415 37.8931 14.12 37.584C14.0916 37.5745 14.0625 37.5644 14.0342 37.5549C13.5767 37.3993 13.1244 37.2269 12.68 37.0364C12.6771 37.0349 12.6735 37.0335 12.6705 37.032C12.2502 36.8509 11.8378 36.6502 11.4305 36.4385C11.3775 36.4109 11.3236 36.3847 11.2713 36.3564C10.8996 36.1578 10.536 35.9433 10.1775 35.7193C10.0713 35.6524 9.96582 35.5847 9.86109 35.5164C9.53091 35.3004 9.20509 35.0756 8.888 34.8378C8.85527 34.8131 8.824 34.7869 8.79127 34.7622C8.81455 34.7491 8.83782 34.736 8.86109 34.7229L14.6116 31.5862C15.6007 31.0465 16.2153 30.0116 16.2153 28.8851L16.2145 26.2655L16.0473 26.0633C16.0313 26.0451 14.4589 24.1324 13.8647 21.5425L13.7985 21.2545L13.5505 21.0938C13.2007 20.8676 12.9913 20.4895 12.9913 20.0815V17.5033C12.9913 17.1651 13.1345 16.8502 13.3964 16.6138L13.6364 16.3971V12.3462L13.6298 12.2509C13.6276 12.2335 13.4131 10.4844 14.6451 9.08C15.6967 7.88145 17.4989 7.27273 20 7.27273C22.4916 7.27273 24.288 7.87636 25.3425 9.06618C26.5731 10.456 26.3716 12.2378 26.3702 12.2524L26.3636 16.3985L26.6036 16.6153C26.8647 16.8509 27.0087 17.1665 27.0087 17.5047V20.0829C27.0087 20.6015 26.656 21.072 26.1498 21.2284L25.7884 21.3396L25.672 21.6996C25.2429 23.0327 24.632 24.264 23.8567 25.3593C23.6662 25.6284 23.4807 25.8669 23.3215 26.0495L23.1411 26.2553V28.9455C23.1411 30.1178 23.7927 31.1724 24.8415 31.696L30.9993 34.7745C31.0385 34.7942 31.0771 34.8145 31.1156 34.8349C31.0378 34.8938 30.9578 34.9484 30.8793 35.0051Z" />
    </SVG>
  );
};

export default Profile;
