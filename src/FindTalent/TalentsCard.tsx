import { IconCalendarMonth, IconHeart, IconMapPin } from '@tabler/icons-react';
import { Avatar, Button, Divider, Text, Modal, } from '@mantine/core';
import { DateInput, TimeInput } from '@mantine/dates';
import { Link } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { useRef, useState } from 'react';



const TalentsCard = (props:any) => {
    const [opened, { open, close }] = useDisclosure(false);
    const [value, setValue] = useState<string | null>(null);
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className="bg-mine-shaft-900 p-4 ease-in-out w-96 flex flex-col gap-3 rounded-xl hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400">
            {/* Header */}
            <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                    <div className="p-2 bg-mine-shaft-800 rounded-full">
                        <Avatar size="lg" src={`/${props.image}.png`} alt="" />
                    </div>

                    <div className="flex flex-col gap-1">
                        <div className="font-semibold text-lg">{props.name}</div>
                        <div className="text-xs text-mine-shaft-300">
                            {props.role} &bull; {props.company}
                        </div>
                    </div>
                </div>

                <IconHeart className="text-mine-shaft-300 cursor-pointer" stroke={1.5} />
            </div>

            {/* Skills */}
            <div className="flex gap-2 flex-wrap text-xs">
                {props.topSkills?.map((skill: string, index: number) => (
                    <div
                        key={index}
                        className="py-1 px-2 bg-mine-shaft-800 text-bright-sun-400 rounded-lg"
                    >
                        {skill}
                    </div>
                ))}
            </div>

            {/* About */}
            <Text className="!text-xs text-justify !text-mine-shaft-300" lineClamp={3}>
                {props.about}
            </Text>

            <Divider size="xs" className="bg-mine-shaft-700" />
            {
                props.invited? <div className='flex gap-1 text-mine-shaft-200 text-sm items-center'>Interview: August 27, 2024 10:00 AM</div> : <div className="flex justify-between">
                    <div className="font-semibold text-mine-shaft-200">
                        {props.expectedCtc}
                    </div>

                    <div className="flex gap-1 text-xs text-mine-shaft-400 items-center">
                        <IconMapPin className="h-5 w-5" stroke={1.5} />
                        {props.location}
                    </div>
                </div>
            }

            <Divider size="xs" className="bg-mine-shaft-700" />

            {/* Buttons */}
            <div className="flex [&>*]:w-1/2 [&>*]:p-1">
                {
                    !props.invited &&<>
                      <Link to="/talent-profile">
                        <Button variant="outline" color="bright-sun.4" fullWidth>
                            Profile
                        </Button>
                    </Link>

                    <div>
                        {props.posted ? (
                            <Button
                                onClick={open}
                                rightSection={<IconCalendarMonth className="w-5 h-5" />}
                                variant="light"
                                color="bright-sun.4"
                                fullWidth
                            >
                                Schedule
                            </Button>
                        ) : (
                            <Button variant="light" color="bright-sun.4" fullWidth>
                                Message
                            </Button>
                        )}       
                </div>
                </>
                }
                {
                    props.invited && <>
                    <div>
                        <Button color='bright-sun.4' variant='outline' fullWidth>Accept</Button>
                    </div>
                    <div>
                        <Button color='bright-sun.4' variant='light' fullWidth>Reject</Button>
                    </div>
                    </>
                }
            </div>

            {/* Modal */}
            <Modal opened={opened} onClose={close} title="Schedule Interview" centered>
                <div className="flex flex-col gap-4">
                    <DateInput
                        minDate={new Date()}
                        value={value}
                        onChange={setValue}
                        label="Date"
                        placeholder="Enter Date"
                        valueFormat="YYYY-MM-DD"
                    />

                    <TimeInput
                        label="Time"
                        ref={ref}
                        onClick={() => ref.current?.showPicker()}
                    />

                    <Button color="bright-sun.4" variant="light" fullWidth>
                        Schedule
                    </Button>
                </div>
            </Modal>
        </div>
    );
};

export default TalentsCard;