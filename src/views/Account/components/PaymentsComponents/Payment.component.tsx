import { Text } from '@/components';
import { PaymentMethodComponent } from '@/views/Account/components/PaymentsComponents/PaymentMethod.component';
import { Button, Divider, Group, useMantineTheme } from '@mantine/core';
import useAccount from '../../useAccount';

const tempCards = [
    { cardType: 'Visa', name: 'John Doe', expires: '05/24', lastFour: '2424', primary: true },
    { cardType: 'Visa', name: 'John Doe', expires: '05/24', lastFour: '2424' },
    { cardType: 'Visa', name: 'John Doe', expires: '05/24', lastFour: '2424' },
    { cardType: 'Visa', name: 'John Doe', expires: '05/24', lastFour: '2424' },
];

const PaymentComponent = () => {
    const theme = useMantineTheme();
    const { userPaymentMethodBoolPlaceholder, setUserPaymentMethodBoolPlaceholder } = useAccount();

    return (
        <>
            {!userPaymentMethodBoolPlaceholder && (
                <>
                    <Group position='apart' mt={24}>
                        <Text fz={18} fw={400} noMargin>
                            Payment methods
                        </Text>
                        <Button
                            component='a'
                            variant='subtle'
                            color={theme.other.colors.offBlack}
                            td='underline'
                            fz={18}
                            p={0}
                            onClick={() => setUserPaymentMethodBoolPlaceholder(true)}
                        >
                            Add
                        </Button>
                    </Group>
                    <Text fz={18} fw={300} noMargin pt={3}>
                        Add a payment method using our secure payment system, then start purchasing art
                    </Text>
                </>
            )}
            {userPaymentMethodBoolPlaceholder &&
                tempCards.map((item, index) => (
                    <>
                        {index > 0 && <Divider mt={24} />}
                        <PaymentMethodComponent
                            key={index}
                            cardType={item.cardType}
                            lastFour={item.lastFour}
                            name={item.name}
                            expires={item.expires}
                            primary={item.primary}
                        />
                    </>
                ))}
        </>
    );
};

export { PaymentComponent };
