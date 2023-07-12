/* eslint-disable */
import { motion } from 'framer-motion'

// Nav/ Logo/ Footer
export const ProfileLogo = ({ classSVG="", classPath="", fill="", ...props}) => (
	<motion.svg width="32" height="21" className={classSVG} viewBox="0 0 32 21" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			className={classPath}
			d="M4.37609 0.151057C4.39299 0.184845 6.16708 3.26807 8.32978 7.00173C10.4925 10.7354 12.7059 14.5535 13.2466 15.4827L14.2181 17.1722L13.8633 17.8479C12.9847 19.4867 12.1314 20.9312 12.03 20.9312C11.9709 20.9312 11.5063 20.1963 10.9994 19.3008C10.1715 17.8564 8.81132 15.4996 6.96965 12.315C2.33166 4.29863 0 0.218633 0 0.134161C0 -0.00944158 4.31696 0.00745434 4.37609 0.151057ZM31.1142 0.0412408C31.1818 0.108818 30.658 1.08869 29.6104 2.85416C29.1796 3.57217 28.5206 4.71254 28.132 5.38832C28.0923 5.45743 28.0477 5.53503 27.9989 5.61986C27.5708 6.36457 26.8219 7.66743 26.2228 8.69117C25.5554 9.83999 24.9725 10.8705 24.9302 10.9888C24.8542 11.1831 24.9894 11.4619 26.1214 13.43C26.8226 14.6549 27.5238 15.8459 27.6758 16.0909C27.8279 16.3274 28.0307 16.6738 28.1236 16.8596L28.2925 17.189L27.2196 19.0643C26.6367 20.0949 26.1129 20.9227 26.0623 20.9058C26.02 20.8889 25.5807 20.1709 25.0907 19.3093C23.3082 16.1585 22.683 15.1026 22.5986 15.1026C22.5479 15.1026 22.2944 15.4743 22.0325 15.922C20.4527 18.6673 20.0134 19.4444 19.6586 20.0949C19.2193 20.9143 19.0757 21.0748 18.9405 20.9143C18.8983 20.8551 18.4506 20.0611 17.9521 19.1572C17.8741 19.0181 17.7907 18.8692 17.7039 18.7142C17.2268 17.8625 16.6478 16.829 16.3047 16.243C16.207 16.0739 16.0561 15.8129 15.8665 15.4849C15.2699 14.453 14.29 12.7579 13.3733 11.1746C12.9312 10.4081 12.3931 9.47648 11.8324 8.50593C10.8608 6.82398 9.82174 5.0252 9.09856 3.76646C7.94962 1.78137 7.01189 0.13416 7.01189 0.108819C7.01189 0.0834772 7.99186 0.0665847 9.19149 0.0665847H11.3711L11.8864 0.970434C12.1305 1.41423 12.5431 2.13004 12.8574 2.67553C12.9021 2.75301 12.9447 2.82705 12.9847 2.89639C13.3141 3.45391 14.0238 4.6872 14.5729 5.64173C15.122 6.59627 15.8317 7.81266 16.1442 8.34484C16.3301 8.67013 16.6802 9.27314 17.0593 9.92626C17.3004 10.3416 17.5533 10.7773 17.7832 11.1746C18.9152 13.1259 18.9912 13.2442 19.0926 13.2442C19.194 13.2442 20.2753 11.3267 20.2753 11.1493C20.2753 11.0648 19.7009 9.99204 18.9997 8.77564C18.3069 7.5508 17.7578 6.52869 17.7832 6.4949C17.817 6.46956 18.7885 6.43577 19.9459 6.41887L22.0494 6.39353L22.2015 6.6554C22.3658 6.95899 22.4531 7.13875 22.554 7.14678C22.6918 7.15773 22.8551 6.8487 23.2744 6.09788C23.6461 5.45589 24.0685 4.72944 24.2206 4.48447C24.3726 4.2395 24.4994 4.00298 24.4994 3.95229C24.4994 3.89316 23.1815 3.86782 20.3345 3.86782H16.1696L15.0967 2.01789C14.5053 0.995775 14.0238 0.142608 14.0238 0.117267C14.0238 0.0919252 14.3532 0.0581352 14.7672 0.0412408C16.2118 -0.00944236 31.0635 -0.0178896 31.1142 0.0412408Z"
			fill={fill}
		/>
	</motion.svg>
)

// not in use
export const LinkedInIcon = ({ classSVG, classPath, fill={SECONDARY_COLOR}, ...props}) => (
  <motion.svg width="22" height="22" className={classSVG} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5.16719 17.5H1.53906V5.81641H5.16719V17.5ZM3.35117 4.22266C2.19102 4.22266 1.25 3.26172 1.25 2.10157C1.25 1.5443 1.47137 1.00986 1.86542 0.615816C2.25947 0.22177 2.79391 0.000396729 3.35117 0.000396729C3.90844 0.000396729 4.44288 0.22177 4.83692 0.615816C5.23097 1.00986 5.45234 1.5443 5.45234 2.10157C5.45234 3.26172 4.51094 4.22266 3.35117 4.22266ZM18.7461 17.5H15.1258V11.8125C15.1258 10.457 15.0984 8.71876 13.2395 8.71876C11.3531 8.71876 11.0641 10.1914 11.0641 11.7148V17.5H7.43984V5.81641H10.9195V7.41016H10.9703C11.4547 6.49219 12.6379 5.52344 14.4031 5.52344C18.075 5.52344 18.75 7.94141 18.75 11.082V17.5H18.7461Z"
      fillRule="evenodd"
      clipRule="evenodd"
      className={classPath}
      fill={fill}
      // fill="#D4494C"
    />
  </motion.svg>
)

// not in use
export const GithubIcon = ({ classSVG, classPath, fill={SECONDARY_COLOR}, ...props}) => (
  <motion.svg width="22" height="21" className={classSVG} viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M6.79297 14.7473C6.79297 14.8215 6.70312 14.8809 6.58984 14.8809C6.46094 14.892 6.37109 14.8326 6.37109 14.7473C6.37109 14.673 6.46094 14.6137 6.57422 14.6137C6.69141 14.6025 6.79297 14.6619 6.79297 14.7473ZM5.57813 14.5803C5.55078 14.6545 5.62891 14.7398 5.74609 14.7621C5.84766 14.7992 5.96484 14.7621 5.98828 14.6879C6.01172 14.6137 5.9375 14.5283 5.82031 14.4949C5.71875 14.4689 5.60547 14.5061 5.57813 14.5803ZM7.30469 14.5172C7.19141 14.5432 7.11328 14.6137 7.125 14.699C7.13672 14.7732 7.23828 14.8215 7.35547 14.7955C7.46875 14.7695 7.54687 14.699 7.53516 14.6248C7.52344 14.5543 7.41797 14.5061 7.30469 14.5172ZM9.875 0.296875C4.45703 0.296875 0.3125 4.20449 0.3125 9.35156C0.3125 13.467 3.03906 16.9887 6.93359 18.2281C7.43359 18.3135 7.60938 18.0203 7.60938 17.7791C7.60938 17.549 7.59766 16.2799 7.59766 15.5006C7.59766 15.5006 4.86328 16.0572 4.28906 14.3947C4.28906 14.3947 3.84375 13.3148 3.20312 13.0365C3.20312 13.0365 2.30859 12.4539 3.26562 12.465C3.26562 12.465 4.23828 12.5393 4.77344 13.4225C5.62891 14.8549 7.0625 14.443 7.62109 14.198C7.71094 13.6043 7.96484 13.1924 8.24609 12.9475C6.0625 12.7174 3.85938 12.4168 3.85938 8.84687C3.85938 7.82637 4.15625 7.31426 4.78125 6.66113C4.67969 6.41992 4.34766 5.42539 4.88281 4.14141C5.69922 3.9002 7.57812 5.14336 7.57812 5.14336C8.35938 4.93555 9.19922 4.82793 10.0313 4.82793C10.8633 4.82793 11.7031 4.93555 12.4844 5.14336C12.4844 5.14336 14.3633 3.89648 15.1797 4.14141C15.7148 5.4291 15.3828 6.41992 15.2813 6.66113C15.9063 7.31797 16.2891 7.83008 16.2891 8.84687C16.2891 12.4279 13.9883 12.7137 11.8047 12.9475C12.1641 13.2406 12.4688 13.7973 12.4688 14.6693C12.4688 15.9199 12.457 17.4674 12.457 17.7717C12.457 18.0129 12.6367 18.3061 13.1328 18.2207C17.0391 16.9887 19.6875 13.467 19.6875 9.35156C19.6875 4.20449 15.293 0.296875 9.875 0.296875ZM4.10937 13.0959C4.05859 13.133 4.07031 13.2184 4.13672 13.2889C4.19922 13.3482 4.28906 13.3742 4.33984 13.326C4.39062 13.2889 4.37891 13.2035 4.3125 13.133C4.25 13.0736 4.16016 13.0477 4.10937 13.0959ZM3.6875 12.7953C3.66016 12.8436 3.69922 12.9029 3.77734 12.94C3.83984 12.9771 3.91797 12.966 3.94531 12.9141C3.97266 12.8658 3.93359 12.8064 3.85547 12.7693C3.77734 12.7471 3.71484 12.7582 3.6875 12.7953ZM4.95313 14.1164C4.89063 14.1646 4.91406 14.276 5.00391 14.3465C5.09375 14.4318 5.20703 14.443 5.25781 14.3836C5.30859 14.3354 5.28516 14.224 5.20703 14.1535C5.12109 14.0682 5.00391 14.057 4.95313 14.1164ZM4.50781 13.5709C4.44531 13.608 4.44531 13.7045 4.50781 13.7898C4.57031 13.8752 4.67578 13.9123 4.72656 13.8752C4.78906 13.827 4.78906 13.7305 4.72656 13.6451C4.67188 13.5598 4.57031 13.5227 4.50781 13.5709Z"
      fillRule="evenodd"
      clipRule="evenodd"
      className={classPath}
      fill={fill}
    />
  </motion.svg>
)

// Projects
export const WwwIcon = ({ classSVG, classPath, fill={SECONDARY_COLOR}, ...props}) => (
  <motion.svg width="56" height="13" className={classSVG} viewBox="0 0 56 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M17.5377 0.134033L12.1147 12H9.30969L8.57869 3.55103L4.77069 12L1.98269 12.017L0.877686 0.134033H3.42769L3.90369 9.34803L7.93269 0.134033H10.5847L11.2307 9.29703L14.9707 0.134033H17.5377Z"
      fillRule="evenodd"
      clipRule="evenodd"
      className={classPath}
      fill={fill}
    />
    <path
      d="M34.9527 0.134033L29.5297 12H26.7247L25.9937 3.55103L22.1857 12L19.3977 12.017L18.2927 0.134033H20.8427L21.3187 9.34803L25.3477 0.134033H27.9997L28.6457 9.29703L32.3857 0.134033H34.9527Z"
      fillRule="evenodd"
      clipRule="evenodd"
      className={classPath}
      fill={fill}
    />
    <path
      d="M52.3678 0.134033L46.9448 12H44.1398L43.4088 3.55103L39.6008 12L36.8128 12.017L35.7078 0.134033H38.2578L38.7338 9.34803L42.7628 0.134033H45.4148L46.0608 9.29703L49.8008 0.134033H52.3678Z"
      fillRule="evenodd"
      clipRule="evenodd"
      className={classPath}
      fill={fill}
    />
    <path
      d="M53.0848 12.14C52.6448 12.14 52.2915 12.0134 52.0248 11.76C51.7581 11.5067 51.6248 11.1867 51.6248 10.8C51.6248 10.2667 51.8248 9.81337 52.2248 9.44003C52.6381 9.05337 53.1181 8.86003 53.6648 8.86003C54.1048 8.86003 54.4515 8.9867 54.7048 9.24003C54.9715 9.48003 55.1048 9.80003 55.1048 10.2C55.1048 10.7334 54.9048 11.1934 54.5048 11.58C54.1048 11.9534 53.6315 12.14 53.0848 12.14Z"
      fillRule="evenodd"
      clipRule="evenodd"
      className={classPath}
      fill={fill}
    />
  </motion.svg>
)

export const AppStoreIcon = ({ classSVG, classPath, fill={SECONDARY_COLOR}, ...props}) => (
  <motion.svg width="19" height="19" className={classSVG} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" { ...props}>
    <path
      d="M15.0312 0.1875H1.96875C0.985352 0.1875 0.1875 0.985352 0.1875 1.96875V15.0312C0.1875 16.0146 0.985352 16.8125 1.96875 16.8125H15.0312C16.0146 16.8125 16.8125 16.0146 16.8125 15.0312V1.96875C16.8125 0.985352 16.0146 0.1875 15.0312 0.1875ZM4.90039 13.2686C4.69629 13.6248 4.23984 13.7436 3.8873 13.5395C3.53105 13.3354 3.4123 12.8789 3.61641 12.5264L4.14707 11.6098C4.74453 11.4279 5.23438 11.5689 5.6166 12.0328L4.90039 13.2686ZM10.0549 11.2684H3.30469C2.89648 11.2684 2.5625 10.9344 2.5625 10.5262C2.5625 10.118 2.89648 9.78398 3.30469 9.78398H5.19727L7.62422 5.5832L6.86348 4.26953C6.65937 3.91328 6.78184 3.46055 7.13437 3.25645C7.49062 3.05234 7.94336 3.1748 8.14746 3.52734L8.47773 4.09883L8.80801 3.52734C9.01211 3.17109 9.46855 3.05234 9.82109 3.25645C10.1773 3.46055 10.2961 3.91699 10.092 4.26953L6.90801 9.78398H9.2125C9.96211 9.78398 10.3814 10.6635 10.0549 11.2684ZM13.6953 11.2684H12.6191L13.3465 12.5264C13.5506 12.8826 13.4281 13.3354 13.0756 13.5395C12.7193 13.7436 12.2666 13.6211 12.0625 13.2686C10.8416 11.157 9.92871 9.56875 9.31641 8.51484C8.69668 7.43867 9.13828 6.3625 9.57988 5.99883C10.066 6.84121 10.7934 8.10293 11.7656 9.78398H13.6953C14.1035 9.78398 14.4375 10.118 14.4375 10.5262C14.4375 10.9381 14.1035 11.2684 13.6953 11.2684Z"
      fillRule="evenodd"
      clipRule="evenodd"
      className={classPath}
      fill={fill}
    />
  </motion.svg>
)

export const PlayStoreIcon = ({ classSVG, classPath, fill={SECONDARY_COLOR}, ...props}) => (
  <motion.svg width="19" height="19" className={classSVG} viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" { ...props}>
    <path
      d="M12.0717 8.69473L3.88162 0.482422L14.3019 6.46445L12.0717 8.69473ZM1.74412 0C1.26169 0.252344 0.938843 0.7125 0.938843 1.30996V17.6863C0.938843 18.2838 1.26169 18.7439 1.74412 18.9963L11.2664 9.49629L1.74412 0ZM17.523 8.37188L15.3373 7.10645L12.8992 9.5L15.3373 11.8936L17.5676 10.6281C18.2355 10.0975 18.2355 8.90254 17.523 8.37188ZM3.88162 18.5176L14.3019 12.5355L12.0717 10.3053L3.88162 18.5176Z"
      fillRule="evenodd"
      clipRule="evenodd"
      className={classPath}
      fill={fill}
    />
  </motion.svg>
)

// github/gitlab repo link
export const SourceCodeLink = ({ classSVG, classPath, fill={SECONDARY_COLOR}, ...props}) => (
  <svg width="25" height="19" className={classSVG} viewBox="0 0 25 19" fill="none" xmlns="http://www.w3.org/2000/svg" { ...props}>
    <path
      d="M10.4597 18.9815L8.17219 18.3246C7.93219 18.2578 7.79719 18.0092 7.86469 17.7716L12.9834 0.321496C13.0509 0.0839784 13.3022 -0.0496254 13.5422 0.0171765L15.8297 0.674062C16.0697 0.740864 16.2047 0.989515 16.1372 1.22703L11.0184 18.6772C10.9472 18.9147 10.6997 19.052 10.4597 18.9815ZM6.18469 14.8175L7.81594 13.0955C7.98844 12.9137 7.97719 12.6242 7.78594 12.4572L4.38844 9.49934L7.78594 6.5415C7.97719 6.37449 7.99219 6.08502 7.81594 5.90317L6.18469 4.18116C6.01594 4.00302 5.73094 3.99189 5.54719 4.16261L0.143437 9.17275C-0.0478125 9.34717 -0.0478125 9.64778 0.143437 9.82221L5.54719 14.8361C5.73094 15.0068 6.01594 14.9994 6.18469 14.8175ZM18.4547 14.8398L23.8584 9.82592C24.0497 9.65149 24.0497 9.35089 23.8584 9.17646L18.4547 4.15889C18.2747 3.99189 17.9897 3.99931 17.8172 4.17745L16.1859 5.89945C16.0134 6.0813 16.0247 6.37078 16.2159 6.53778L19.6134 9.49934L16.2159 12.4572C16.0247 12.6242 16.0097 12.9137 16.1859 13.0955L17.8172 14.8175C17.9859 14.9994 18.2709 15.0068 18.4547 14.8398Z"
      fillRule="evenodd"
      clipRule="evenodd"
      className={classPath}
      fill={fill}  
    />
  </svg>
)
