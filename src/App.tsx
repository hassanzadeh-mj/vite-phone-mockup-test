import  { useState } from 'react';
// مطمئن شو پکیج phone-mockup-react در پروژه Vite نصب شده است
import { PhoneMockup } from 'phone-mockup-react';
// مسیردهی به استایل‌های پکیج اصلی (مطمئن شو این فایل در node_modules/phone-mockup-react/dist وجود دارد)
import 'phone-mockup-react/dist/styles.css';
// مسیردهی به استایل App.css پروژه تست
import './App.css';
// اگر به react-app-env.d.ts نیاز داری، آن را از پروژه تست به src منتقل کن
// import './react-app-env.d.ts';

// اگر logo.svg استفاده می‌شود، آن را به public یا src/assets منتقل کن و import آن را بررسی کن
// import logo from './logo.svg';

// اگر reportWebVitals و setupTests به صورت مستقیم در این فایل استفاده نمی‌شوند، نیازی به انتقالشان نیست

type PhoneModel = 'iphone-16' | 'iphone-15' | 'iphone-14' | 'samsung-s24' | 'samsung-a54' | 'samsung-s23' | 'pixel-8' | 'pixel-7' | 'xiaomi-14' | 'xiaomi-13';

const phoneModels: PhoneModel[] = [
  'iphone-16',
  'iphone-15',
  'iphone-14',
  'samsung-s24',
  'samsung-a54',
  'samsung-s23',
  'pixel-8',
  'pixel-7',
  'xiaomi-14',
  'xiaomi-13'
];

function App() {
  const [selectedPhone, setSelectedPhone] = useState<PhoneModel>('iphone-16');
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="controls">
        <div className="phone-selector">
          {phoneModels.map((model) => (
            <button
              key={model}
              onClick={() => setSelectedPhone(model)}
              className={selectedPhone === model ? 'active' : ''}
            >
              {model}
            </button>
          ))}
        </div>

        <button
          className="theme-toggle"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>
      <div className="mockup-container">
        {/* اطمینان حاصل کنید که پکیج phone-mockup-react شامل مدل samsung-s24 با دوربین است */}
        <PhoneMockup model={selectedPhone} className="portrait">
          <div className="phone-content">
            <div className="header">
              <h1>Phone Mockup Demo</h1>
              {/* این متن فقط برای نمایش است و نسخه واقعی پکیج را نشان نمی‌دهد */}
              <p>Testing the latest version with Samsung S24 Camera</p>
            </div>
            <div className="features">
              <div className="feature-card">
                <h3>🎨 Beautiful Design</h3>
                <p>Realistic phone frames with modern aesthetics</p>
              </div>
              <div className="feature-card">
                <h3>📱 Multiple Models</h3>
                <p>Support for various iPhone and Android devices</p>
              </div>
              <div className="feature-card">
                <h3>⚡️ Smooth Animations</h3>
                <p>Fluid transitions and interactive elements</p>
              </div>
            </div>
            <div className="footer">
              <p>Current Model: {selectedPhone}</p>
              <p>Mode: {isDarkMode ? 'Dark' : 'Light'}</p>
            </div>
          </div>
          {/* مطمئن شو مسیر ویدئو درست باشد یا آن را هم از public پروژه تست به public پروژه Vite منتقل کنی */}
          <video width="100%" height="100%" controls>
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          </video>
        </PhoneMockup>
        {/* اگر این div تستی نیاز نیست، حذفش کن */}
        <div className="phone-mockup" style={{ border: '2px solid red' }}>Test Phone Mockup</div>
      </div>
    </div>
  );
}

export default App;