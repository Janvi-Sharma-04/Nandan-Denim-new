// App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import AboutUs from './component/AboutUs';
import Careers from './component/Careers';
import ContactUs from './component/ContactUs';
import Investor from './component/Investors';
import Media from './component/Media';
import Products from './component/Products';
import WeCare from './component/WeCare';
import Culture from './pages/Culture';
import Leadership from './pages/Leadership';
import ChiripalGroup from './pages/ChiripalGroup';
import GroupData from './pages/GroupData';
import Denim from './pages/Denim';
import Shirting from './pages/Shirting';
import Yarn from './pages/Yarn';
import Sustainability from './pages/Sustainability';
import Quality from './pages/Quality';
import Community from './pages/Community';
import Employees from './pages/Employees';
import Blog from './pages/Blog';
import AnnualReport from './pages/AnnualReport';
import ShareholdingPattern from './pages/ShareholdingPattern';
import PolicesCodes from './pages/PoliciesCodes';
import RegulationsOdLodr from './pages/RegulationOfLodr';
import NewspaperPublication from './pages/NewspaperPublication';
import CommitteeMemberChairman from './pages/CommitteeMemberChairman';
import Brsr from './pages/Brsr';
import Footer from './component/Footer';
import MessageOfManagingDirector from './pages/MessageOfManagingDirector';
import CeoMessage from './pages/CeoMessage';
import BoardOfDirector from './pages/BoardOfDirector';
import Business from './pages/Business';
import ResearchReport from './pages/ResearchReport';
import WelfarePractice from './pages/WelfarePractice';
import Regulation40OfLodr from './pages/Regulation40OfLodr';
import DisclosureOfPartyTransaction from './pages/DisclosureOfPartyTransaction';
import UnpaidDividend from './pages/UnpaidDividend';
import DisclosureUR30OfLodr from './pages/DisclosureUR30OfLodr';
import ConCallTranscripts from './pages/ConcallTranscripts';
import NoticeOtherIntimation from './pages/NoticeOtherIntimation';
import StatementOfInvestorCompaints from './pages/StatementOfInvestorCompaints';
import ClosureOfTradingWindow from './pages/ClosureOfTrandingWindow';
import LetterToShareholders from './pages/LetterToShareholders';
import ProfileOfBoardOfDirector from './pages/ProfileOfBoardOfDirector';
import VotingResult from './pages/VotingResult';
import FinancialResults from './pages/FinancialResults';
import CorporateGovernance from './pages/CorporateGovernance';
import InvestorShareholderServices from './pages/InvestorShareholderServices';
import ReconciliationOfShareCapitalAudit from './pages/ReconciliationOfShareCapitalAudit';
import CorporateAnnouncement from './pages/CorporateAnnouncement';
import SecretarialCompliance from './pages/SecretarialCompliance';
import MoaAoa from './pages/MoaAoa';
import Header1 from './component/Header1';
import WomenLeadership from './pages/WomenLeadership';
import LeadersMustBuildFamilyEnvironmentAchieveExcellence from './pages/LeadersMustBuildFamilyEnvironmentAchieveExcellence';
import May2018 from './pages/May2018';
import Leadershipblog from './pages/Leadershipblog';
import WomenLeadershipBlog from './pages/WomenLeadershipBlog';
import CorporateTag from './pages/CorporateTag';
import DenimTag from './pages/DenimTag';
import LeadershipTag from './pages/LeadershipTag';
import MarketTag from './pages/MarketTag';
import NewsTag from './pages/NewsTag';
import OneWorldTag from './pages/OneWorldTag';
import WomenTag from './pages/WomenTag';
import ScrollToTop from './pages/ScrollToTop';


function App() {
  return (
    <>

      <ScrollToTop />
      <div className="block lg:hidden h-20"></div>

      <Routes>
        <Route path="/" element={<Home />} />
        {/* about us */}
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/message-of-managing-director" element={<MessageOfManagingDirector />} />
        <Route path="/ceo-message" element={<CeoMessage />} />
        <Route path="/board-of-director" element={<BoardOfDirector />} />
        <Route path="/chiripal-group" element={<ChiripalGroup />} />
        <Route path="/groupdata" element={<GroupData />} />

        {/* products */}
        <Route path="/products" element={<Products />} />
        <Route path="/denim" element={<Denim />} />
        <Route path="/shirting" element={<Shirting />} />
        <Route path="/https://ww1.nandandenim.co/lander" element={<Yarn />} />

        {/* we care */}
        <Route path="/wecare" element={<WeCare />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/community" element={<Community />} />
        <Route path="/employees" element={<Employees />} />

        {/* media */}
        <Route path="/media" element={<Media />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/blog/women-leadership' element={< WomenLeadership />} />
        <Route path='/blog/leaders-must-nuild-family-environment-achieve-excellence'
          element={<LeadersMustBuildFamilyEnvironmentAchieveExcellence />} />
        <Route path='/blog/leadership-blog' element={<Leadershipblog />} />
        <Route path='/blog/women-leadership-blog' element={<WomenLeadershipBlog />} />
        <Route path='/blog/may-2018' element={<May2018 />} />
        <Route path='/tags/corporate-tag' element={<CorporateTag />} />
        <Route path='/tags/denim-tag' element={<DenimTag />} />
        <Route path='/tags/leadership-tag' element={<LeadershipTag />} />
        <Route path='/tags/market-tag' element={<MarketTag />} />
        <Route path='/tags/news-tag' element={<NewsTag />} />
        <Route path='/tags/One-World' element={<OneWorldTag />} />
        <Route path='/tags/women-tag' element={<WomenTag />} />


        {/* investor */}
        <Route path="/investor" element={<Investor />} />
        {/* col 1 */}
        <Route path="/annual-report" element={<AnnualReport />} />
        <Route path="/shareholding-pattern" element={<ShareholdingPattern />} />
        <Route path="/policies-codes" element={<PolicesCodes />} />
        <Route path="/regulation7-lodr" element={<RegulationsOdLodr />} />
        <Route path="/newspaper-publication" element={<NewspaperPublication />} />
        <Route path="https://nandandenim.com/wp-content/uploads/2023/05/Committee-Membership-and-Chairmanship.pdf" element={<CommitteeMemberChairman />} />
        <Route path="/brsr" element={<Brsr />} />
        {/* col-2 */}
        <Route path="/business" element={<Business />} />
        <Route path="/research-reports" element={<ResearchReport />} />
        <Route path="/welfare-practice" element={<WelfarePractice />} />
        <Route path="/regulation40-lodr" element={<Regulation40OfLodr />} />
        <Route path="/related-party-transaction" element={<DisclosureOfPartyTransaction />} />
        <Route path="/unpaid-dividend" element={<UnpaidDividend />} />
        <Route path="/ur30-lodr" element={<DisclosureUR30OfLodr />} />
        {/* col-3 */}
        <Route path="/voting-results" element={<VotingResult />} />
        <Route path="/concall-transcripts" element={<ConCallTranscripts />} />
        <Route path="/notice-intimations" element={<NoticeOtherIntimation />} />
        <Route path="/investor-complaints" element={<StatementOfInvestorCompaints />} />
        <Route path="/trading-window" element={<ClosureOfTradingWindow />} />
        <Route path="/letter-to-shareholders" element={<LetterToShareholders />} />
        <Route path="https://nandandenim.com/wp-content/uploads/2025/02/Profile-of-Board-of-Directors.pdf" element={<ProfileOfBoardOfDirector />} />
        {/* col-4 */}
        <Route path="/financial-results" element={<FinancialResults />} />
        <Route path="/corporate-governance" element={<CorporateGovernance />} />
        <Route path="/investor-services" element={<InvestorShareholderServices />} />
        <Route path="/share-capital-audit" element={<ReconciliationOfShareCapitalAudit />} />
        <Route path="https://www.bseindia.com/stock-share-price/nandan-denim-limited/ndl/532641/corp-announcements/" element={<CorporateAnnouncement />} />
        <Route path="/compliance-report" element={<SecretarialCompliance />} />
        <Route path="https://nandandenim.com/wp-content/uploads/2025/02/MOA-AOA.pdf" element={<MoaAoa />} />

        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />

      </Routes>


    </>
  );
}

export default App;
