import { DataStore } from 'aws-amplify';
import { ARTISTS, AUTHOR, AVATAR, BIDS, EVENTINFO, NFTS, OWNER } from '../../models';

export async function UpdateNFTS(id, tokenSold, bids) {
  try {
    const original = await DataStore.query(NFTS, id);
    /* Models in DataStore are immutable. To update a record you must use the copyOf function
        to apply updates to the item’s fields rather than mutating the instance directly */
    let ds = await DataStore.save(
      NFTS.copyOf(original, (item) => {
        item.event.ticketSold = tokenSold;
        item.bids = bids;
      })
    );
    if (ds) return true;
  } catch (error) {
    console.log('UPDATE NFT ERROR: ', error);
    return false;
  }
}
export async function UpdateAuthor(id, bids) {
  try {
    const original = await DataStore.query(AUTHOR, id);
    /* Models in DataStore are immutable. To update a record you must use the copyOf function
        to apply updates to the item’s fields rather than mutating the instance directly */
    let ds = await DataStore.save(
      AUTHOR.copyOf(original, (item) => {
        item.bidHistory = bids;
      })
    );
    if (ds) return true;
  } catch (error) {
    console.log('UPDATE NFT ERROR: ', error);
    return false;
  }
}
export function newAvatar(avatar) {
  return avatar ? new AVATAR(avatar) : null;
}
export function newArtists(artists) {
  return artists ? new ARTISTS(artists) : null;
}
export function newOwner(owner) {
  return owner ? new OWNER(owner) : null;
}
export function newEventInfo(EventInfo) {
  return EventInfo ? new EVENTINFO(EventInfo) : null;
}
export function newAuthor(author) {
  return author ? new AUTHOR(author) : null;
}
export async function newNFTS(nfts) {
  return nfts ? new NFTS(nfts) : null;
}
export function newBids(bid) {
  return bid ? new BIDS(bid) : null;
}
