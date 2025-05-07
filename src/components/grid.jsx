import React, { useRef, useState } from 'react';
import { FaDownload, FaArrowDown } from 'react-icons/fa';

const GameCard = ({ game }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        {game.imageUrl ? (
          <img 
            src={game.imageUrl} 
            alt={game.title} 
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-gray-500 text-lg font-medium">
            {game.title} Image
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{game.title}</h3>
        
        <div className="flex items-center text-gray-600 mb-1">
          <span className="mr-2">⬇️</span>
          <span>{game.downloads} Downloads</span>
        </div>
        
        <div className="flex items-center text-green-600 font-medium mb-1">
          <span className="mr-2">🎁</span>
          <span>₹{game.bonus} Bonus</span>
        </div>
        
        <div className="flex items-center text-gray-700 mb-4">
          <span className="mr-2">💰</span>
          <span>Min. Withdrawal ₹{game.minWithdrawal}/-</span>
        </div>

        <a 
          href={game.downloadLink} 
          target="_blank"
          rel="noopener noreferrer"
          className=" w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300"
        >
          <FaDownload className="mr-2" />
          Download Now
        </a>
      </div>
    </div>
  );
};

const GameListing = () => {
  // Sample game data - first 8 shown initially
  const allGames = [
    {
      id: 1,
      title: "Rummy Legend",
      downloads: "302k+",
      bonus: 79,
      minWithdrawal: 150,
      imageUrl: "https://scontent.famd3-3.fna.fbcdn.net/v/t39.30808-6/494695477_122124726776731252_5339301535835644836_n.webp?stp=dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6e4oWpUttzYQ7kNvwHRLFvX&_nc_oc=AdlrJhgM1_1hdENWaVuC07-jYk6UlVQhhjjw_v0K6zGq4dfzm_cSOtwfXqiiGKUd2uU&_nc_zt=23&_nc_ht=scontent.famd3-3.fna&_nc_gid=jpyB0ZTkMKbLqp-FWEJo2A&oh=00_AfE2kygc7lW1Z7V4hkn7OOMEI233192U4GA1GQmr4IzN7w&oe=6818A633",
      downloadLink: "https://invite.bfgame9.com/?code=JP0SDPZ"
    },
    {
      id: 2,
      title: "Teen Patti Line",
      downloads: "922k+",
      bonus: 91,
      minWithdrawal: 200,
      imageUrl: "https://bit.ly/437XWg1",
      downloadLink: "https://invite.aagameclub.com/?code=OO4J7CS"
    },
    {
      id: 3,
      title: "Teen Patti Field",
      downloads: "234k+",
      bonus: 55,
      minWithdrawal: 200,
      imageUrl: "https://bit.ly/42ZXzDj",
      downloadLink: "https://invite.ez777c.com/?code=UAU5NFS"
    },
    {
      id: 4,
      title: "Teen Patti Regal",
      downloads: "211k+",
      bonus: 91,
      minWithdrawal: 100,
      imageUrl: "https://bit.ly/3YZkHjR",
      downloadLink: "https://g.k9.game/?invite_code=0004a266"
    },
    {
      id: 5,
      title: "Rummy Drive",
      downloads: "1.3m+",
      bonus: 65,
      minWithdrawal: 400,
      imageUrl: "https://bit.ly/3ESZGk0",
      downloadLink: "https://www.v3gameqz08.com/?regSource=2&rouletteCode=3450279#/"
    },
    {
      id: 6,
      title: "Rummy Palace",
      downloads: "450k+",
      bonus: 85,
      minWithdrawal: 250,
      imageUrl: "https://bit.ly/4k2mTzs",
      downloadLink: "https://d.seaflygames.live/s/8000000/1771548/31411a39f"
    },
    {
      id: 7,
      title: "Teen Patti Gold",
      downloads: "1.1m+",
      bonus: 99,
      minWithdrawal: 300,
      imageUrl: "https://scontent.famd3-2.fna.fbcdn.net/v/t39.30808-6/494539401_122124727328731252_6452616289548884948_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=4EoiYcS9kt8Q7kNvwHlf-wb&_nc_oc=AdmUpT2qeCdrHgYZPr8yfJPdJAtb6cVN3pWDsajbqCcqd4VYjIvYWAublRjE9RXscJo&_nc_zt=23&_nc_ht=scontent.famd3-2.fna&_nc_gid=cZBgabVyyau5Ffx37zhsMg&oh=00_AfE3BQPr3-zxwcLG4niBwLdlcZbwdlOblDUL6m_3C24Mng&oe=6818D726",
      downloadLink: "https://invite.ez777c.com/?code=UAU5NFS"
    },
    {
      id: 8,
      title: "Rummy Circle Pro",
      downloads: "890k+",
      bonus: 75,
      minWithdrawal: 350,
      imageUrl: "https://scontent.famd3-1.fna.fbcdn.net/v/t39.30808-6/494567002_122124727454731252_5230341538727071483_n.webp?stp=dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2_v1Hv-fPcYQ7kNvwFMyXfu&_nc_oc=AdkMmAn-suzC9yLQbEaRVng3NaapLLtWjKudThtHHgzG6j0yWk_p_ZGVpiEPIopHTyM&_nc_zt=23&_nc_ht=scontent.famd3-1.fna&_nc_gid=xitBHybyHE1t42fhoqjjVQ&oh=00_AfHJ8kj6TBojQpyZL4D6ISI14tCBWuiJW-bobAX1v3KfJA&oe=6818D865",
      downloadLink: "https://invite.ez777c.com/?code=UAU5NFS"
    },
    {
      id: 9,
      title: "Teen Patti Diamond",
      downloads: "650k+",
      bonus: 110,
      minWithdrawal: 500,
      imageUrl: "https://scontent.famd3-2.fna.fbcdn.net/v/t39.30808-6/494430907_122124727550731252_4725806514131559071_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SIvWR3Ai5iwQ7kNvwG7dJfG&_nc_oc=Adlrd5gJqJvSB-pIG0lTfJSPzos4-QAJbnqC_SBY-fL_EPEF1AxrfWvxfKWXVMrqguU&_nc_zt=23&_nc_ht=scontent.famd3-2.fna&_nc_gid=d_4oBuHbELb0Eby1i88iTA&oh=00_AfGsbJeLGpjwdXTmlHB1ic4hTa6qvw5MmolqtEMORPeEYA&oe=6818B4C2",
      downloadLink: "https://invite.p77.game/?code=JFDR6LS"
    },
    {
      id: 10,
      title: "Rummy Stars",
      downloads: "320k+",
      bonus: 60,
      minWithdrawal: 200,
      imageUrl: "https://scontent.famd3-3.fna.fbcdn.net/v/t39.30808-6/494225476_122124727658731252_1018562030286485335_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=P8WDf4kGHaYQ7kNvwGP_Duf&_nc_oc=AdnWAz-jjy6LHzADjJZqt4Y98CbIsm0ttGCE0q0C9FebJMTyd7-TzE3-zd2qjgDfD0k&_nc_zt=23&_nc_ht=scontent.famd3-3.fna&_nc_gid=EG-pVVqJD1sDzt7g11RTgg&oh=00_AfGlJ9p9mCIOrByUrkL1wWgDQd-XUt3RwLOiuvA9IY8sXw&oe=6818E09C",
      downloadLink: "https://invite.slotinr.game/?code=DZZI7IZ"
    },
    {
      id: 11,
      title: "Teen Patti Winner",
      downloads: "780k+",
      bonus: 120,
      minWithdrawal: 400,
      imageUrl: "https://scontent.famd3-2.fna.fbcdn.net/v/t39.30808-6/494315748_122124727856731252_2879670523727188331_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=E5rA0UD4BBUQ7kNvwE3sLOP&_nc_oc=AdllvqUOZT25bSB8lYQImaP8bjoNCga4taNWEAUas6vZMFf92OkUzZKhRZtKFNCyrOQ&_nc_zt=23&_nc_ht=scontent.famd3-2.fna&_nc_gid=eUJqbtlv0C_fLh922lpMsA&oh=00_AfFh3sfLlnUGg5BWumWpya5Yz1oI_OQ8SaoVc4M0q42Bcw&oe=6818B257",
      downloadLink: "https://cdn8.tp3win.com/cdn/download/sagar_new_v2/index.html?i=16306849&c=Tp3winpoker363GG01&e=pro&s=a"
    },
    {
      id: 12,
      title: "Rummy Jayho",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 100,
      imageUrl: "https://scontent.famd3-3.fna.fbcdn.net/v/t39.30808-6/494773221_122124727514731252_6040055584849578101_n.webp?stp=dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=7L2OQSi-Ym0Q7kNvwHiamCq&_nc_oc=Adk7OXsWAcLLYoVO5jJuxpsI-cU15EfkYS-7l5GoF2ieSL3xMadOe9jSYsYAnGAt2cU&_nc_zt=23&_nc_ht=scontent.famd3-3.fna&_nc_gid=SltaDcUnypIFQEAHdhRxLw&oh=00_AfFkUmLYFqMSSOHLttUkPNtEx5w5WKTWcYixCxPGLzL-bw&oe=6818BF39",
      downloadLink: "https://jaiho77702.com/?code=6WY4W5GHHUS&t=1740925545"
    },
    {
      id: 13,
      title: "Rummy Empire",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 100,
      imageUrl: "https://scontent.famd3-1.fna.fbcdn.net/v/t39.30808-6/495012066_122124727664731252_7649736255402700627_n.webp?stp=dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Exa-owir9vkQ7kNvwGTZep3&_nc_oc=Adklm9XYTey0rAzF58yAXJzBXZXte4XFGTl1-H8U1KH0k1c6y3bWrzDgP-l8mol9_6g&_nc_zt=23&_nc_ht=scontent.famd3-1.fna&_nc_gid=Lt8lx_G1vuLj1XAgVMMnkQ&oh=00_AfH1DVcxE0ydlqrqC9YJhLrrViKBVrASDm4Q6ecrao7LnQ&oe=6818D2B9",
      downloadLink: "https://acc.dream77.info/Dream77/share/index.html?ic=AAWWBQ58&ts=1746005700"
    },
    {
      id: 14,
      title: "Rummy Empire",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 200,
      imageUrl: "https://scontent.famd3-1.fna.fbcdn.net/v/t39.30808-6/494528810_122124727232731252_1074267173447178368_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=5iaPwIgP-8UQ7kNvwGTdFKB&_nc_oc=AdmCSp5Cy2V_eqX5sBi-sN50xKU7bp2TC9fFaEAIVbeNeM12VqPg98FT78Wy99RKIMo&_nc_zt=23&_nc_ht=scontent.famd3-1.fna&_nc_gid=HOJ3BCXRcwqz-JQnoX96lw&oh=00_AfFlZ0OrzuwDt1I4ZcQSMP5XGCLG08qE-wHRouFjhEZBDw&oe=6818DEB4",
      downloadLink: "https://invite.slotinr.game/?code=DZZI7IZ"
    },
    {
      id: 15,
      title: "Rummy Empire",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 300,
      imageUrl: "https://scontent.famd3-2.fna.fbcdn.net/v/t39.30808-6/494525546_122124727286731252_4593734625407025352_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=8ZXtEsZGFccQ7kNvwFaT3z4&_nc_oc=AdlVXCgoiaqaGbiodMNdmCbkMu-v113AtLDjT8JnteZ5Qnq45rg3PeDfOU0iByitTKM&_nc_zt=23&_nc_ht=scontent.famd3-2.fna&_nc_gid=Q5vNqQY1XPWHg_ibRISgZg&oh=00_AfGefoYMBgIK567xrgC35oczniCqsfmPpv4m6m7JiNvb3g&oe=6818DEA6",
      downloadLink: "https://ap.game/?inviteCode=GFK1AJPC"
    },
    {
      id: 16,
      title: "Rummy Empire",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 300,
      imageUrl: "https://scontent.famd3-3.fna.fbcdn.net/v/t39.30808-6/494716471_122124727544731252_5632736322598789601_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=W6J0_eiDYYoQ7kNvwHcBoO5&_nc_oc=AdlHlHmvKz7ulx5APODSFSkQ1aZzdFywugBdQXtB4t17ZovSAuf8MnupDwmlsQnUXU0&_nc_zt=23&_nc_ht=scontent.famd3-3.fna&_nc_gid=p_-p4V9dEIz8iFHwqvGMLQ&oh=00_AfG_BMj8PkfMIKY3bXhkvdz6YgVVRuvDVBkYoUAStRsukQ&oe=6818B440",
      downloadLink: "https://g.k9.game/?invite_code=0004a266"
    },
    {
      id: 17,
      title: "Rummy Jeet",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 100,
      imageUrl: "https://scontent.famd3-1.fna.fbcdn.net/v/t39.30808-6/495237386_122125794632731252_3940202495883381507_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JijXOOrF06kQ7kNvwH2Bsyb&_nc_oc=AdltRLFq3lx0b0pahOSdQNWSxrq_Z1FeIQBCazaGKPIdTyYcZRSfydXHBmxf5gOVb-E&_nc_zt=23&_nc_ht=scontent.famd3-1.fna&_nc_gid=Wu7vhZnzYCkx30M7VWvzUA&oh=00_AfIMR46G5KgQjdwprhlp7xV6q6H0TC_BOTR-V9Kc9tN7Fg&oe=682106B2",
      downloadLink: "https://invite.jeetl.com/?code=R4FF7XS"
    },

    {
      id: 18,
      title: "Big 444",
      downloads: "520k+",
      bonus: 80,
      minWithdrawal: 100,
      imageUrl: "https://scontent.famd3-1.fna.fbcdn.net/v/t39.30808-6/495518862_122125796510731252_6588624021286811975_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=qmyEgAQnWpwQ7kNvwGaua6y&_nc_oc=AdngLbn11FwdWbrpPPTfk-hJXM3nwB1I9zNh4Fm21ZjunyQFPZOs89y3-fPFpzBydW8&_nc_zt=23&_nc_ht=scontent.famd3-1.fna&_nc_gid=FZ7ec5CuHFPjEQKHg7D3Lw&oh=00_AfKfm9yigvAnftDk_jnRHlIW4isGXLA3JX91OarJzE2Vcg&oe=68212C3D",
      downloadLink: "https://www.big444.bet/register?referralCode=cvr7473&affiliateCode=daili888"
    },

  ];

  const [visibleGames, setVisibleGames] = useState(8);
  const moreGamesRef = useRef(null);

  const loadMoreGames = () => {
    setVisibleGames(allGames.length);
    
    // Smooth scroll to the newly loaded games
    setTimeout(() => {
      moreGamesRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }, 100);
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Popular Card Games
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allGames.slice(0, visibleGames).map(game => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {visibleGames < allGames.length && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMoreGames}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full inline-flex items-center transition-colors duration-300"
            >
              View More Games
              <FaArrowDown className="ml-2" />
            </button>
          </div>
        )}

        {/* This is the reference point for scrolling */}
        <div ref={moreGamesRef} className="h-1"></div>
      </div>
    </div>
  );
};

export default GameListing;