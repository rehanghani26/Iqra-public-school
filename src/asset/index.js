/**
 * Centralized Asset Exports for Iqra Public School Portal
 * Automatically imports and provides clean static URL paths for all local school assets
 */

import img15aug from './15aug.jpg';
import img15aug2 from './15aug2.jpg';
import imgDirectorSirMain from './DireactorSirMain.jpg';
import imgDirectorSir from './DirectorSir.jpg';
import imgAward from './award.jpg';
import imgAward2 from './award2.jpg';
import imgAward3 from './award3.jpg';
import imgAward4 from './award4.jpg';
import imgAward5 from './award5.jpg';
import imgEvent from './event.jpg';
import imgEvent2 from './event2.jpg';
import imgHostel from './hostel.jpg';
import imgPrayer from './prayer.jpg';
import imgPrayer2 from './prayer2.jpg';
import imgSchoolLogo from './schoolLogo.jpg';
import imgSchoolTemplate from './schooltemplate.jpg';

// Helper to extract clean URL string whether processed as Next.js Image Object or static string
const getSrc = (img) => (img && typeof img === 'object' && img.src ? img.src : img);

export const schoolLogo = getSrc(imgSchoolLogo);
export const schoolTemplate = getSrc(imgSchoolTemplate);
export const directorSir = getSrc(imgDirectorSir);
export const directorSirMain = getSrc(imgDirectorSirMain);
export const prayer = getSrc(imgPrayer);
export const prayer2 = getSrc(imgPrayer2);
export const aug15 = getSrc(img15aug);
export const aug15_2 = getSrc(img15aug2);
export const award = getSrc(imgAward);
export const award2 = getSrc(imgAward2);
export const award3 = getSrc(imgAward3);
export const award4 = getSrc(imgAward4);
export const award5 = getSrc(imgAward5);
export const event = getSrc(imgEvent);
export const event2 = getSrc(imgEvent2);
export const hostel = getSrc(imgHostel);

const assets = {
  schoolLogo,
  schoolTemplate,
  directorSir,
  directorSirMain,
  prayer,
  prayer2,
  aug15,
  aug15_2,
  award,
  award2,
  award3,
  award4,
  award5,
  event,
  event2,
  hostel,
};

export default assets;
