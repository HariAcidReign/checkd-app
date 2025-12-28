import React, { useState, useEffect } from 'react'
import { Modal, Pressable, TextInput, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { View, Text, XStack, YStack } from 'tamagui'
import { Feather } from '@expo/vector-icons'
import { colors } from '../theme/tokens'
import { ProductivityType, PRODUCTIVITY_OPTIONS } from '../types/checkin'

// Font family names
const FONT_REGULAR = 'Inconsolata_400Regular'
const FONT_SEMIBOLD = 'Inconsolata_600SemiBold'
const FONT_BOLD = 'Inconsolata_700Bold'

interface CheckInModalProps {
    visible: boolean
    onClose: () => void
    onSave: (text: string, productivity: ProductivityType) => void
}

/**
 * CheckInModal - Modal for adding a new check-in
 */
export function CheckInModal({ visible, onClose, onSave }: CheckInModalProps) {
    const [text, setText] = useState('')
    const [productivity, setProductivity] = useState<ProductivityType>('Productive')
    const [dropdownOpen, setDropdownOpen] = useState(false)

    // Reset state whenever modal opens
    useEffect(() => {
        if (visible) {
            setText('')
            setProductivity('Productive')
            setDropdownOpen(false)
        }
    }, [visible])

    const handleSave = () => {
        onSave(text, productivity)
        // State reset is handled by useEffect on next open
    }

    const handleCancel = () => {
        onClose()
        // State reset is handled by useEffect on next open
    }

    const handleSelectProductivity = (option: ProductivityType) => {
        setProductivity(option)
        setDropdownOpen(false)
    }

    const getProductivityColor = (type: ProductivityType) => {
        switch (type) {
            case 'Productive': return colors.sage
            case 'Not Productive': return colors.terracotta
            case 'Neutral': return colors.gray
        }
    }

    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={handleCancel}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View flex={1} backgroundColor="rgba(0,0,0,0.5)">
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24 }}
                    >
                        {/* Modal content */}
                        <Pressable
                            style={{ width: '100%', maxWidth: 400 }}
                            onPress={(e) => {
                                // Prevent click propagation
                                e.stopPropagation()
                                // Close dropdown if clicked elsewhere in modal
                                if (dropdownOpen) setDropdownOpen(false)
                            }}
                        >
                            <View style={{ position: 'relative' }}>
                                {/* Shadow layer */}
                                <View
                                    style={{
                                        position: 'absolute',
                                        top: 6,
                                        left: 6,
                                        right: -6,
                                        bottom: -6,
                                        backgroundColor: colors.brownDark,
                                        borderRadius: 20,
                                        width: '100%',
                                        height: '100%',
                                    }}
                                />

                                {/* Main modal */}
                                <View
                                    style={{
                                        backgroundColor: colors.cream,
                                        borderRadius: 20,
                                        borderWidth: 3,
                                        borderColor: colors.brown,
                                        padding: 24,
                                    }}
                                >
                                    {/* Header */}
                                    <Text
                                        fontSize={22}
                                        fontWeight="700"
                                        color="$brown"
                                        textAlign="center"
                                        marginBottom={20}
                                        style={{ fontFamily: FONT_BOLD }}
                                    >
                                        What are you doing?
                                    </Text>

                                    {/* Text Input */}
                                    <View
                                        style={{
                                            backgroundColor: colors.creamDark,
                                            borderRadius: 12,
                                            borderWidth: 2,
                                            borderColor: colors.brown,
                                            padding: 16,
                                            marginBottom: 16,
                                        }}
                                    >
                                        <TextInput
                                            value={text}
                                            onChangeText={setText}
                                            placeholder="Describe what you're doing..."
                                            placeholderTextColor={colors.gray}
                                            multiline
                                            returnKeyType="done"
                                            blurOnSubmit={true}
                                            onSubmitEditing={Keyboard.dismiss}
                                            numberOfLines={3}
                                            style={{
                                                fontFamily: FONT_REGULAR,
                                                fontSize: 16,
                                                color: colors.charcoal,
                                                minHeight: 80,
                                                textAlignVertical: 'top',
                                            }}
                                        />
                                    </View>

                                    {/* Productivity Dropdown */}
                                    <View style={{ marginBottom: 24, zIndex: 100 }}>
                                        <Text
                                            fontSize={14}
                                            color="$gray"
                                            marginBottom={8}
                                            style={{ fontFamily: FONT_REGULAR }}
                                        >
                                            How productive is this?
                                        </Text>

                                        {/* Dropdown trigger */}
                                        <Pressable
                                            onPress={(e) => {
                                                e.stopPropagation()
                                                setDropdownOpen(!dropdownOpen)
                                                Keyboard.dismiss()
                                            }}
                                            style={{
                                                backgroundColor: colors.creamDark,
                                                borderRadius: 12,
                                                borderWidth: 2,
                                                borderColor: colors.brown,
                                                padding: 14,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'space-between',
                                            }}
                                        >
                                            <XStack alignItems="center" gap={10}>
                                                <View
                                                    style={{
                                                        width: 12,
                                                        height: 12,
                                                        borderRadius: 6,
                                                        backgroundColor: getProductivityColor(productivity),
                                                    }}
                                                />
                                                <Text
                                                    fontSize={16}
                                                    color="$brown"
                                                    style={{ fontFamily: FONT_SEMIBOLD }}
                                                >
                                                    {productivity}
                                                </Text>
                                            </XStack>
                                            <Feather
                                                name={dropdownOpen ? 'chevron-up' : 'chevron-down'}
                                                size={20}
                                                color={colors.brown}
                                            />
                                        </Pressable>

                                        {/* Dropdown options */}
                                        {dropdownOpen && (
                                            <View
                                                style={{
                                                    position: 'absolute',
                                                    top: '100%',
                                                    left: 0,
                                                    right: 0,
                                                    backgroundColor: colors.cream,
                                                    borderRadius: 12,
                                                    borderWidth: 2,
                                                    borderColor: colors.brown,
                                                    marginTop: 4,
                                                    overflow: 'hidden',
                                                    shadowColor: colors.brownDark,
                                                    shadowOffset: { width: 2, height: 2 },
                                                    shadowOpacity: 0.2,
                                                    shadowRadius: 0,
                                                    elevation: 5,
                                                }}
                                            >
                                                {PRODUCTIVITY_OPTIONS.map((option) => (
                                                    <Pressable
                                                        key={option}
                                                        onPress={(e) => {
                                                            e.stopPropagation()
                                                            handleSelectProductivity(option)
                                                        }}
                                                        style={({ pressed }) => ({
                                                            padding: 14,
                                                            backgroundColor: pressed ? colors.creamDark :
                                                                productivity === option ? colors.creamDark : 'transparent',
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            gap: 10,
                                                        })}
                                                    >
                                                        <View
                                                            style={{
                                                                width: 12,
                                                                height: 12,
                                                                borderRadius: 6,
                                                                backgroundColor: getProductivityColor(option),
                                                            }}
                                                        />
                                                        <Text
                                                            fontSize={16}
                                                            color="$brown"
                                                            style={{ fontFamily: FONT_REGULAR }}
                                                        >
                                                            {option}
                                                        </Text>
                                                        {productivity === option && (
                                                            <Feather name="check" size={16} color={colors.brown} style={{ marginLeft: 'auto' }} />
                                                        )}
                                                    </Pressable>
                                                ))}
                                            </View>
                                        )}
                                    </View>

                                    {/* Buttons */}
                                    <XStack gap={12}>
                                        {/* Cancel Button */}
                                        <View style={{ flex: 1, position: 'relative' }}>
                                            <View
                                                style={{
                                                    position: 'absolute',
                                                    top: 3,
                                                    left: 3,
                                                    right: -3,
                                                    bottom: -3,
                                                    backgroundColor: colors.gray,
                                                    borderRadius: 16,
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            />
                                            <Pressable
                                                onPress={handleCancel}
                                                style={({ pressed }) => ({
                                                    backgroundColor: pressed ? colors.creamDark : colors.cream,
                                                    borderRadius: 16,
                                                    borderWidth: 2,
                                                    borderColor: colors.brown,
                                                    paddingVertical: 14,
                                                    alignItems: 'center',
                                                    transform: pressed ? [{ translateY: 2 }, { translateX: 2 }] : [],
                                                })}
                                            >
                                                <Text
                                                    fontSize={16}
                                                    fontWeight="600"
                                                    color="$brown"
                                                    style={{ fontFamily: FONT_SEMIBOLD }}
                                                >
                                                    Cancel
                                                </Text>
                                            </Pressable>
                                        </View>

                                        {/* Save Button */}
                                        <View style={{ flex: 1, position: 'relative' }}>
                                            <View
                                                style={{
                                                    position: 'absolute',
                                                    top: 3,
                                                    left: 3,
                                                    right: -3,
                                                    bottom: -3,
                                                    backgroundColor: colors.brownDark,
                                                    borderRadius: 16,
                                                    width: '100%',
                                                    height: '100%',
                                                }}
                                            />
                                            <Pressable
                                                onPress={handleSave}
                                                style={({ pressed }) => ({
                                                    backgroundColor: pressed ? colors.brownDark : colors.brown,
                                                    borderRadius: 16,
                                                    borderWidth: 2,
                                                    borderColor: colors.brownDark,
                                                    paddingVertical: 14,
                                                    alignItems: 'center',
                                                    transform: pressed ? [{ translateY: 2 }, { translateX: 2 }] : [],
                                                })}
                                            >
                                                <Text
                                                    fontSize={16}
                                                    fontWeight="600"
                                                    style={{ color: colors.cream, fontFamily: FONT_SEMIBOLD }}
                                                >
                                                    Save
                                                </Text>
                                            </Pressable>
                                        </View>
                                    </XStack>
                                </View>
                            </View>
                        </Pressable>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}
