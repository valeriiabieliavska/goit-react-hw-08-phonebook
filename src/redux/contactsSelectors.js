import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

const selectFilter = state => state.contacts?.currentFilter;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, currentFilter) =>
    contacts &&
    contacts.filter(
      contact =>
        currentFilter &&
        contact.name.toLowerCase().includes(currentFilter.toLowerCase())
    )
);
