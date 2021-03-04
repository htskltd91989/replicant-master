import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  // {
  //  label: 'Trade',
  //  icon: 'TradeIcon',
  //  items: [
  //   {
  //   label: 'Exchange',
  //    href: 'https://exchange.replicanttoken.org/',
  //  },
  //   {
  //     label: 'Liquidity',
  //   href: 'https://exchange.replicanttoken.org/#/pool',
  // },
  // ],
  // },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Banks',
    icon: 'PoolIcon',
    href: '/banks',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x9e26cda56988cebca50362626a6633dbc60b5e5b',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/',
      // },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/',
      },
    ],
  },
 // {
 //   label: 'More',
 //  icon: 'MoreIcon',
 //  items: [
 //     {
 //       // label: 'Github',
 //       href: 'https://github.com/htskltd91989/',
 //     },
 //     {
  //      label: 'Docs',
 //       href: 'https://fedfinance.gitbook.io/fed-finance/',
 //     },
 //     {
 //       label: 'Blog',
 //       href: 'https://medium.com/@FedFinance',
 //     },
 //  ],
 // },
  // {
  //   label: 'Audit by Hacken',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
  // {
  //   label: 'Audit by CertiK',
  //   icon: 'AuditIcon',
  //   href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
