# Orbitra - Crypto & Stock Investment Platform

A modern, fully-functional investment trading platform inspired by Kuda's fintech aesthetic. Built with Next.js, React, TypeScript, and Tailwind CSS.

## 🎯 Features

- **Portfolio Dashboard** - Real-time portfolio value and performance tracking
- **Asset Management** - Track crypto and stock holdings with live prices
- **Market Overview** - Trending assets, price charts, and market data
- **Trading Interface** - Buy/Sell assets with interactive cards
- **Transaction History** - Complete trade history with status tracking
- **Asset Allocation** - Visual portfolio distribution and risk profile
- **Responsive Design** - Mobile-first design that works on all devices
- **Dark Mode** - Professional fintech aesthetic with blue/teal accents
- **Interactive Charts** - Real-time price charts with Recharts

## 📁 File Structure

```
orbitra/
├── app/
│   ├── layout.tsx          # Root layout with navigation
│   ├── globals.css         # Global styles and Tailwind directives
│   └── page.tsx            # Main dashboard page
├── components/
│   ├── Sidebar.tsx         # Navigation sidebar
│   ├── Navigation.tsx      # Top navigation bar
│   ├── PortfolioOverview.tsx # Portfolio value display
│   ├── Dashboard.tsx       # Asset holdings grid
│   ├── MarketOverview.tsx  # Trending assets & charts
│   ├── AssetAllocation.tsx # Portfolio allocation pie chart
│   └── RecentTransactions.tsx # Transaction history table
├── package.json            # Dependencies
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── next.config.js          # Next.js configuration
```

## 🚀 Quick Start

### Step 1: Create Files in GitHub

Create each file in your GitHub repository in this order:

#### Core Configuration Files:
1. **package.json** - Copy the provided package.json content
2. **tsconfig.json** - Copy the provided TypeScript config
3. **tailwind.config.js** - Copy the Tailwind configuration
4. **postcss.config.js** - Create with this content:
```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
5. **next.config.js** - Create with this content:
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
```

#### App Files (create in `app/` folder):
6. **app/layout.tsx** - Root layout
7. **app/globals.css** - Global styles
8. **app/page.tsx** - Main dashboard page

#### Component Files (create in `components/` folder):
9. **components/Sidebar.tsx** - Navigation sidebar
10. **components/Navigation.tsx** - Top bar
11. **components/PortfolioOverview.tsx** - Portfolio cards
12. **components/Dashboard.tsx** - Asset cards
13. **components/MarketOverview.tsx** - Market data
14. **components/AssetAllocation.tsx** - Allocation chart
15. **components/RecentTransactions.tsx** - Transaction table

### Step 2: Deploy to Vercel

1. Go to [Vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Select your `orbitra` repository
5. Click "Deploy"

Vercel will automatically:
- Detect it's a Next.js project
- Install dependencies
- Build and deploy
- Provide you with a live URL

## 🎨 Design System

### Colors
- **Primary**: Blue/Teal (`#0ea5e9`)
- **Dark Background**: `#0f172a`
- **Card Background**: `#1e293b`
- **Success**: Emerald
- **Danger**: Red
- **Warning**: Amber

### Typography
- **Display**: Inter 800
- **Headings**: Inter 700
- **Body**: Inter 400
- **Code**: Fira Code 500

### Components
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Primary (blue), Secondary (gray), Ghost (transparent)
- **Inputs**: Dark background, border focus
- **Badges**: Color-coded status indicators

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Customization

### Add More Assets
Edit `components/Dashboard.tsx` and add items to the `assets` array:

```tsx
const assets = [
  {
    id: 5,
    symbol: 'DOGE',
    name: 'Dogecoin',
    amount: 1000,
    value: 150.00,
    price: 0.15,
    change: 5.2,
    chart: [...],
    icon: 'Ð',
    isFavorite: false,
  },
  // Add more assets...
]
```

### Change Colors
Edit `tailwind.config.js` colors section:

```js
colors: {
  orbitra: {
    600: '#0284c7', // Change to your brand color
    // ...
  }
}
```

### Update Portfolio Data
All data is currently hardcoded. For live data, integrate with:
- **CoinGecko API** - Free crypto prices
- **Alpha Vantage** - Stock market data
- **Binance API** - Crypto trading data

## 📊 API Integration (Future)

To add real data, install axios and create services:

```bash
npm install axios
```

Create `lib/api.ts`:
```tsx
import axios from 'axios'

export const getAssetPrice = async (symbol: string) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/simple/price?ids=${symbol}&vs_currencies=usd`
  )
  return response.data
}
```

## 🔐 Authentication

To add user authentication, integrate with:
- **NextAuth.js** - Social login
- **Supabase** - User management
- **Firebase** - Real-time database

## 📦 Dependencies

All dependencies are included in `package.json`:
- **next** - React framework
- **react** - UI library
- **tailwindcss** - Styling
- **lucide-react** - Icons
- **recharts** - Charts
- **zustand** - State management (optional)

## 🌐 Deployment

### Vercel (Recommended)
- **Zero configuration** - Auto-detects Next.js
- **Free tier** - Perfect for testing
- **Custom domains** - Connect your domain
- **Preview deployments** - Test before going live

### Other Platforms
- **Netlify** - `npm run build`
- **Railway** - Docker support
- **Render** - Free tier available

## 📝 Environment Variables

Create a `.env.local` file for sensitive data (git-ignored automatically):

```env
NEXT_PUBLIC_API_KEY=your_api_key_here
NEXT_PUBLIC_COINGECKO_URL=https://api.coingecko.com/api/v3
```

## 🚨 Performance Tips

1. **Images**: Use Next.js Image component for optimization
2. **Code Splitting**: Components auto-split by Next.js
3. **Caching**: Use `revalidate` for static generation
4. **Monitoring**: Add Vercel Analytics

## 📱 Mobile Optimization

- Sidebar collapses on mobile
- Touch-friendly buttons (48px minimum)
- Responsive grid layouts
- Optimized for 375px+ screens

## 🎯 Next Steps

1. **Deploy** to Vercel
2. **Add Authentication** with NextAuth
3. **Connect APIs** for real data
4. **Add More Pages** (Markets, Portfolio, Analytics)
5. **Implement Trading** (order placement, confirmations)
6. **Add Notifications** (price alerts, trade updates)

## 📧 Support

For issues or questions:
- Check Next.js docs: https://nextjs.org
- Tailwind docs: https://tailwindcss.com
- Recharts docs: https://recharts.org

## 📄 License

MIT - Feel free to use for personal or commercial projects

---

**Built with ❤️ for modern investors**

Live dashboard, real-time data, and pro trading tools — all in one platform.
