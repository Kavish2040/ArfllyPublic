import { useBoolean } from '@/lib/hooks/useBoolean';
import { TransactionsCardComponent } from '@/views/Transactions/components';
import { useState } from 'react';

const transactionsCardPlaceholderData = [
    {
        transactionImage: '/transactionCardPlaceholderImage.png',
        status: 'Shipped',
        artworkName: 'Art name placeholder',
        artworkPrice: 1200,
        artworkArtistName: 'Artist Name placeholder',
        artworkPurchaseDate: '2045-01-02',
        artworkTransactionURL: '/',
    },
    {
        transactionImage: '/transactionCardPlaceholderImage.png',
        status: 'Delivered',
        artworkName: 'Art name placeholder1',
        artworkPrice: 1200,
        artworkArtistName: 'Artist Name placeholder',
        artworkPurchaseDate: '2045-07-03',
        artworkTransactionURL: '/',
    },
    {
        transactionImage: '/transactionCardPlaceholderImage.png',
        status: 'Delivered',
        artworkName: 'Art name placeholder2',
        artworkPrice: 1200,
        artworkArtistName: 'Artist Name placeholder',
        artworkPurchaseDate: '2045-04-01',
        artworkTransactionURL: '/',
    },
    {
        transactionImage: '/transactionCardPlaceholderImage.png',
        status: 'Open purchase request',
        artworkName: 'Art name placeholder3',
        artworkPrice: 1200,
        artworkArtistName: 'Artist Name placeholder',
        artworkPurchaseDate: '2045-01-05',
        artworkTransactionURL: '/',
    },
    {
        transactionImage: '/transactionCardPlaceholderImage.png',
        status: 'Purchased',
        artworkName: 'Art name placeholder4',
        artworkPrice: 1200,
        artworkArtistName: 'Artist Name placeholder',
        artworkPurchaseDate: '2045-01-01',
        artworkTransactionURL: '/',
    },
];

const useTransactions = () => {
    const [selectedStatus, setSelectedStatus] = useState<string>('recent');
    const [contactSupportSent, contactSupportSentHandlers] = useBoolean(false);
    const [contactSupport, contactSupportHandlers] = useBoolean(false);

    const formatDate = (artworkPurchaseDate) => {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const date = new Date(artworkPurchaseDate);
        const monthName = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        return `${monthName} ${day}, ${year}`;
    };

    const sortedTransactions = [...transactionsCardPlaceholderData].sort((a, b) => {
        if (a.status === selectedStatus && b.status !== selectedStatus) {
            return -1;
        } else if (a.status !== selectedStatus && b.status === selectedStatus) {
            return 1;
        } else {
            return new Date(b.artworkPurchaseDate).getTime() - new Date(a.artworkPurchaseDate).getTime();
        }
    });

    const testTransactionsCards = sortedTransactions.map((item, index) => (
        <TransactionsCardComponent
            key={index}
            transactionImage={item.transactionImage}
            status={item.status}
            artworkName={item.artworkName}
            artworkPrice={item.artworkPrice}
            artworkArtistName={item.artworkArtistName}
            artworkPurchaseDate={formatDate(item.artworkPurchaseDate)}
            artworkTransactionURL={item.artworkTransactionURL}
        />
    ));

    return {
        testTransactionsCards,
        selectedStatus,
        setSelectedStatus,
        contactSupport,
        contactSupportHandlers,
        contactSupportSent,
        contactSupportSentHandlers,
    };
};

export default useTransactions;
