import { Text } from '@/components';
import { Button, Group, Stack, TextInput, useMantineTheme } from '@mantine/core';
import useAccount from '../../useAccount';

type Props = {
    name: string;
    firstOrLastName: string;
};

const NameComponent = ({ firstOrLastName, name }: Props) => {
    const theme = useMantineTheme();
    const { update, setUpdate } = useAccount();

    return (
        <>
            {!update && (
                <>
                    <Group position='apart' mt={24}>
                        <Text fz={18} fw={400} noMargin>
                            {name}
                        </Text>
                        <Button
                            component='a'
                            variant='subtle'
                            color={theme.other.colors.offBlack}
                            td='underline'
                            fz={18}
                            p={0}
                            onClick={() => setUpdate(true)}
                        >
                            Update
                        </Button>
                    </Group>
                    <Text fz={18} fw={300} noMargin pt={3}>
                        {firstOrLastName}
                    </Text>
                </>
            )}
            {update && (
                <Stack spacing='none'>
                    <Group position='apart' mt={24}>
                        <TextInput label={name} w={369} />
                        <Button
                            component='a'
                            variant='subtle'
                            color={theme.other.colors.offBlack}
                            td='underline'
                            fz={18}
                            p={0}
                            onClick={() => setUpdate(false)}
                        >
                            Cancel
                        </Button>
                    </Group>
                    <Button size='lg' mt={40} w={140}>
                        Save
                    </Button>
                </Stack>
            )}
        </>
    );
};

export { NameComponent };
