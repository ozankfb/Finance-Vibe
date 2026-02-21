import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Svg, { SvgXml } from 'react-native-svg';
import { Image } from 'react-native';

export function MarketScreen() {

    // Real logos
    const logos = {
        tesla: require('../../assets/tesla.png'),
        microsoft: require('../../assets/microsoft.png'),
        goto: require('../../assets/goto.png'),
        apple: require('../../assets/apple.png'),
    };

    const chartXml = `
<svg width="430" height="174" viewBox="0 0 430 174" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.4809 146.969H0V171.818C0 172.496 0.549465 173.045 1.22727 173.045H428.773C429.451 173.045 430 172.496 430 171.818V8.16737L411.779 29.0662C411.148 29.7901 409.968 29.5413 409.682 28.6243L401.427 2.08997C401.267 1.57687 400.792 1.22729 400.255 1.22729H376.727C376.42 1.22729 376.124 1.34232 375.898 1.54969L359.783 16.3146C359.432 16.6366 358.926 16.726 358.485 16.5438L339.446 8.66953C338.789 8.3979 338.04 8.73919 337.813 9.41293L323.177 52.9961C322.876 53.8921 321.718 54.126 321.093 53.417L305.285 35.4848C304.728 34.8522 303.713 34.9576 303.297 35.6913L300.862 39.9886C300.511 40.6073 299.71 40.7994 299.117 40.407L290.773 34.8854C290.198 34.5054 289.424 34.6722 289.057 35.2549L277.076 54.2824C276.8 54.7206 276.279 54.9385 275.773 54.8269L261.973 51.7829C261.355 51.6467 260.736 52.0018 260.541 52.6033L245.336 99.5555C245.22 99.914 244.946 100.199 244.592 100.329L222.498 108.452C221.95 108.653 221.335 108.44 221.029 107.942L205.6 82.8106C205.111 82.0143 203.947 82.0347 203.487 82.8476L196.88 94.5068C196.729 94.7716 196.486 94.9712 196.197 95.0668L181.47 99.9395C181.119 100.056 180.839 100.325 180.708 100.671L171.965 123.811C171.823 124.188 171.504 124.472 171.113 124.569L151.153 129.522C150.899 129.585 150.672 129.727 150.505 129.928L137.214 145.919C136.748 146.48 135.898 146.513 135.39 145.99L125.22 135.521C124.823 135.112 124.197 135.031 123.709 135.324L92.4183 154.081C92.0199 154.319 91.5208 154.313 91.1288 154.064L80.6413 147.396C80.2327 147.136 79.7094 147.141 79.3056 147.408L69.7897 153.705C69.5888 153.838 69.3533 153.909 69.1124 153.909H48.9809C48.6754 153.909 48.3809 153.795 48.1549 153.589L28.4621 135.671C27.9515 135.207 27.1584 135.255 26.7073 135.777L17.4098 146.544C17.1767 146.814 16.8376 146.969 16.4809 146.969Z" fill="url(#paint0_linear_1584_3202)"/>
<path d="M2.55945 146.969H15.9193C16.6327 146.969 17.3107 146.658 17.777 146.119L25.8841 136.73C26.7864 135.685 28.3726 135.59 29.3938 136.519L47.8038 153.27C48.2557 153.681 48.8447 153.909 49.4557 153.909H68.7432C69.2249 153.909 69.696 153.767 70.0977 153.501L78.2725 148.092C79.2567 147.441 80.5651 147.582 81.3875 148.428L90.2718 157.573C91.1286 158.455 92.5059 158.567 93.4938 157.835L122.817 136.103C123.805 135.37 125.182 135.482 126.039 136.364L134.439 145.01C135.455 146.057 137.155 145.991 138.087 144.869L150.247 130.238C150.582 129.836 151.036 129.551 151.544 129.425L170.488 124.724C171.271 124.53 171.908 123.963 172.193 123.209L180.501 101.218C180.763 100.526 181.323 99.9882 182.026 99.7556L195.748 95.2154C196.326 95.0242 196.813 94.625 197.113 94.0953L202.461 84.6572C203.383 83.0312 205.711 82.9905 206.689 84.5832L220.503 107.085C221.115 108.082 222.344 108.508 223.442 108.105L244.032 100.535C244.739 100.275 245.288 99.7046 245.52 98.9876L260.197 53.6638C260.587 52.4609 261.827 51.7507 263.061 52.023L274.93 54.641C275.941 54.8641 276.984 54.4284 277.536 53.5519L288.388 36.3173C289.122 35.1517 290.671 34.8181 291.819 35.5782L298.02 39.6813C299.206 40.4662 300.809 40.0819 301.51 38.8446L302.448 37.1899C303.279 35.7225 305.309 35.5117 306.425 36.777L319.686 51.8212C320.936 53.2391 323.253 52.7714 323.855 50.9794L337.395 10.6585C337.848 9.31102 339.347 8.62844 340.66 9.17168L357.763 16.2452C358.644 16.6096 359.657 16.4308 360.36 15.7868L375.546 1.87208C375.999 1.45735 376.591 1.22729 377.204 1.22729H399.352C400.426 1.22729 401.376 1.92645 401.695 2.95264L409.012 26.4692C409.586 28.3153 411.97 28.8035 413.224 27.3318L429.5 8.22729" stroke="#53D300" stroke-width="2.45454" stroke-linecap="round"/>
<line x1="290.341" y1="39.8743" x2="290.341" y2="172.583" stroke="black" stroke-width="1.28893" stroke-linecap="round" stroke-dasharray="4 7"/>
<g filter="url(#filter0_d_1584_3202)">
<ellipse cx="290.088" cy="37.2298" rx="6.08828" ry="6.00253" fill="#57DD00"/>
<path d="M290.088 31.8718C293.103 31.8718 295.532 34.2796 295.532 37.2302C295.532 40.1806 293.103 42.5876 290.088 42.5876C287.073 42.5874 284.645 40.1805 284.645 37.2302C284.645 34.2798 287.073 31.872 290.088 31.8718Z" stroke="#F5F5F5" stroke-width="1.28893"/>
</g>
<path d="M279 38.2273C279 46.5116 272.284 53.2273 264 53.2273L229 53.2273C220.716 53.2273 214 46.5116 214 38.2273C214 29.943 220.716 23.2273 229 23.2273L264 23.2273C272.284 23.2273 279 29.943 279 38.2273Z" fill="black"/>
<path d="M229.156 42.2273V34.28H229.131L226.706 36.0256V34.8196L229.144 33.0676H230.261V42.2273H229.156ZM235.79 42.3796C233.65 42.3796 232.413 40.5388 232.413 37.6443C232.413 34.7751 233.663 32.9153 235.79 32.9153C237.916 32.9153 239.154 34.7625 239.154 37.6379C239.154 40.5325 237.922 42.3796 235.79 42.3796ZM235.79 41.3831C237.218 41.3831 238.005 39.9294 238.005 37.6443C238.005 35.3909 237.205 33.9182 235.79 33.9182C234.374 33.9182 235.562 35.4036 233.562 37.6379C233.562 39.9231 234.355 41.3831 235.79 41.3831ZM242.677 42.2273V34.28H242.651L240.227 36.0256V34.8196L242.664 33.0676H243.781V42.2273H242.677ZM246.517 44.0491H245.597L246.212 40.8181H247.387L246.517 44.0491ZM252.236 42.3796C250.3 42.3796 248.917 41.2815 248.917 39.7517C248.917 38.6091 249.704 37.6697 250.884 37.3967V37.3713C249.894 37.0667 249.278 36.2859 249.278 35.321C249.278 33.9373 250.535 32.9153 252.236 32.9153C253.95 32.9153 255.188 33.9309 255.188 35.3274C255.188 36.2795 254.585 37.054 253.588 37.3713V37.3967C254.775 37.676 255.562 38.6155 255.562 39.7517C255.562 41.2878 254.179 42.3796 252.236 42.3796ZM252.236 41.3831C253.5 41.3831 254.395 40.6658 254.395 39.6692C254.395 38.6599 253.5 37.949 252.236 37.949C250.979 37.949 250.078 38.6663 250.078 39.6692C250.078 40.6658 250.979 41.3831 252.236 41.3831ZM252.236 36.946C253.303 36.946 254.058 36.3176 254.058 35.429C254.058 34.5276 253.309 33.8992 252.236 33.8992C251.164 33.8992 250.415 34.5339 250.415 35.429C250.415 36.3176 251.164 36.946 252.236 36.946ZM260.196 42.386C258.825 42.386 257.733 41.6433 257.168 40.323C256.864 39.6184 256.718 38.7932 256.718 37.803C256.718 34.718 258.032 32.9089 260.272 32.9089C261.828 32.9089 263.021 33.842 263.313 35.283H262.151C261.904 34.4514 261.167 33.9182 260.26 33.9182C258.73 33.9182 257.86 35.2766 257.822 37.7141H257.841C258.254 36.8191 259.263 36.2288 260.399 36.2288C262.145 36.2288 263.44 37.5173 263.44 39.2566C263.44 41.0657 262.075 42.386 260.196 42.386ZM260.184 41.3704C261.352 41.3704 262.278 40.45 262.278 39.2947C262.278 38.095 261.415 37.2317 260.203 37.2317C258.99 37.2317 258.095 38.095 258.095 39.2629C258.095 40.4373 259.009 41.3704 260.184 41.3704Z" fill="#F5F5F5"/>
<defs>
<filter id="filter0_d_1584_3202" x="278.844" y="31.2273" width="22.488" height="22.3164" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.15572"/>
<feGaussianBlur stdDeviation="2.57786"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0509804 0 0 0 0 0.0392157 0 0 0 0 0.172549 0 0 0 0.08 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1584_3202"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1584_3202" result="shape"/>
</filter>
<linearGradient id="paint0_linear_1584_3202" x1="215" y1="1.22729" x2="215" y2="173.045" gradientUnits="userSpaceOnUse">
<stop stop-color="#C2FF9A"/>
<stop offset="1" stop-color="#EEFEF2" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
    `;

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Activity</Text>
                <TouchableOpacity>
                    <Feather name="bell" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            <ScrollView bounces={false} style={styles.container} showsVerticalScrollIndicator={false}>

                {/* Top Asset Info */}
                <View style={styles.assetHeaderRow}>
                    <View>
                        <Text style={styles.assetTicker}>NVDA</Text>
                        <Text style={styles.assetPrice}>$ 104,86</Text>
                        <Text style={styles.assetDeltaNum}>+532</Text>
                    </View>
                    <View style={styles.assetPill}>
                        <Text style={styles.assetPillText}>NVDA</Text>
                        <Feather name="arrow-up-right" size={14} color="#4CAF50" style={styles.pillIcon} />
                        <Text style={styles.pillPercent}>2.03%</Text>
                    </View>
                </View>

                <View style={[styles.chartContainer, { alignItems: 'center', justifyContent: 'center' }]}>
                    <SvgXml xml={chartXml} width="100%" height="100%" />
                </View>

                {/* Stocks Grid Section */}
                <Text style={styles.sectionTitle}>Stocks</Text>
                <View style={styles.gridContainer}>

                    {/* Tesla Card */}
                    <View style={styles.stockCard}>
                        <View style={styles.cardHeaderRow}>
                            <Image source={logos.tesla} style={styles.brandIcon} />
                            <View style={styles.cardDeltaRow}>
                                <Feather name="arrow-down-right" size={14} color="#E53935" />
                                <Text style={[styles.cardDeltaText, { color: '#E53935' }]}>2.03%</Text>
                            </View>
                        </View>
                        <Text style={styles.stockName}>Tesla Inc</Text>
                        <Text style={styles.stockTicker}>TSLA</Text>
                        <View style={styles.facesRow}>
                            <View style={[styles.faceStack, { backgroundColor: '#E0E0E0', zIndex: 3 }]} />
                            <View style={[styles.faceStack, { backgroundColor: '#BDBDBD', zIndex: 2, marginLeft: -12 }]} />
                            <View style={[styles.faceStack, { backgroundColor: '#9E9E9E', zIndex: 1, marginLeft: -12 }]} />
                        </View>
                        <Text style={styles.socialProofText}>Your friends invested in this company</Text>
                    </View>

                    {/* Microsoft Card */}
                    <View style={styles.stockCard}>
                        <View style={styles.cardHeaderRow}>
                            <Image source={logos.microsoft} style={styles.brandIcon} />
                            <View style={styles.cardDeltaRow}>
                                <Feather name="arrow-up-right" size={14} color="#4CAF50" />
                                <Text style={[styles.cardDeltaText, { color: '#4CAF50' }]}>2.03%</Text>
                            </View>
                        </View>
                        <Text style={styles.stockName}>Microsoft Inc</Text>
                        <Text style={styles.stockTicker}>MSFT</Text>
                        <View style={styles.facesRow}>
                            <View style={[styles.faceStack, { backgroundColor: '#E0E0E0', zIndex: 3 }]} />
                            <View style={[styles.faceStack, { backgroundColor: '#BDBDBD', zIndex: 2, marginLeft: -12 }]} />
                            <View style={[styles.faceStack, { backgroundColor: '#9E9E9E', zIndex: 1, marginLeft: -12 }]} />
                        </View>
                        <Text style={styles.socialProofText}>Your friends invested in this company</Text>
                    </View>

                    {/* GoTo Card */}
                    <View style={styles.stockCard}>
                        <View style={styles.cardHeaderRow}>
                            <Image source={logos.goto} style={styles.brandIcon} />
                            <View style={styles.cardDeltaRow}>
                                <Feather name="arrow-up-right" size={14} color="#4CAF50" />
                                <Text style={[styles.cardDeltaText, { color: '#4CAF50' }]}>2.03%</Text>
                            </View>
                        </View>
                        <Text style={styles.stockName}>Gojek Tokopedia Tbk</Text>
                        <Text style={styles.stockTicker}>GOTO</Text>
                    </View>

                    {/* Apple Card */}
                    <View style={styles.stockCard}>
                        <View style={styles.cardHeaderRow}>
                            <Image source={logos.apple} style={styles.brandIcon} />
                            <View style={styles.cardDeltaRow}>
                                <Feather name="arrow-down-right" size={14} color="#E53935" />
                                <Text style={[styles.cardDeltaText, { color: '#E53935' }]}>2.03%</Text>
                            </View>
                        </View>
                        <Text style={styles.stockName}>Apple Inc</Text>
                        <Text style={styles.stockTicker}>AAPL</Text>
                    </View>

                </View>
                <View style={{ height: 40 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 16,
        paddingBottom: 24,
    },
    headerTitle: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 24,
        fontWeight: '700',
        color: '#000',
    },
    container: {
        flex: 1,
    },
    assetHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 24,
        marginBottom: 24,
    },
    assetTicker: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 14,
        color: '#000',
        marginBottom: 4,
    },
    assetPrice: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 36,
        fontWeight: '800',
        color: '#000',
        letterSpacing: -1,
        marginBottom: 4,
    },
    assetDeltaNum: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: '500',
    },
    assetPill: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 20,
        paddingHorizontal: 12,
        paddingVertical: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    assetPillText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
        marginRight: 4,
    },
    pillIcon: {
        marginRight: 4,
    },
    pillPercent: {
        fontSize: 14,
        fontWeight: '600',
        color: '#000',
    },
    chartContainer: {
        height: 180,
        position: 'relative',
        borderBottomWidth: 1,
        borderColor: '#EFEFEF',
        marginBottom: 32,
    },
    chartTooltip: {
        position: 'absolute',
        top: 5,
        left: '52%',
        backgroundColor: '#000',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 16,
    },
    tooltipText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: '600',
    },
    sectionTitle: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 18,
        fontWeight: '600',
        color: '#000',
        paddingHorizontal: 24,
        marginBottom: 20,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
    },
    stockCard: {
        width: '48%',
        backgroundColor: '#F9F9F9',
        borderRadius: 20,
        padding: 16,
        marginBottom: 16,
    },
    cardHeaderRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    brandIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        resizeMode: 'contain',
    },
    cardDeltaRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardDeltaText: {
        fontSize: 12,
        fontWeight: '600',
        marginLeft: 2,
    },
    stockName: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
        marginBottom: 4,
    },
    stockTicker: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 12,
        color: '#999',
        marginBottom: 16,
    },
    facesRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    faceStack: {
        width: 24,
        height: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#F9F9F9',
    },
    socialProofText: {
        fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto',
        fontSize: 12,
        color: '#888',
        lineHeight: 16,
    },
});
