import {geoPositionSearch as geoPositionSearchAPI} from '../apiMap'
import {SET_GEO_POSITION_KEY, LOADING_GEO_POSITION_KEY, ERROR_GEO_POSITION_KEY} from '../actions/types'
import axios from 'axios'
export const geoPositionSearch = (crd) => async (dispatch) => {
  dispatch(geoPositionSearchLoading(true))
  try{

    // THIS IS WORKING API CALL, REMOVE ON PRODUCTION

    // const res = await axios.get(geoPositionSearchAPI({Latitude: crd.latitude, Longitude: crd.longitude}))
    // dispatch({
    //   type: SET_GEO_POSITION_KEY,
    //   payload: res.data
    // });
    dispatch({
      type: SET_GEO_POSITION_KEY,
      payload: geoPositionMockData
    });

    dispatch(geoPositionSearchLoading(false))

  }
  catch(err){
    console.error(err.message)
    dispatch(geoPositionSearchError(err))
    dispatch(geoPositionSearchLoading(false))
  }
};

export const geoPositionSearchLoading = (isLoading) => {
    return {
      type: LOADING_GEO_POSITION_KEY,
      payload: isLoading
    };
};

export const geoPositionSearchError = (err) => (dispatch) => {
  return {
    type: ERROR_GEO_POSITION_KEY,
    payload: err
  };
};

const geoPositionMockData = {
    Version: 1,
    Key: '212568',
    Type: 'City',
    Rank: 75,
    LocalizedName: 'Porat',
    EnglishName: 'Porat',
    PrimaryPostalCode: '',
    Region: {
      ID: 'MEA',
      LocalizedName: 'Middle East',
      EnglishName: 'Middle East'
    },
    Country: {
      ID: 'IL',
      LocalizedName: 'Israel',
      EnglishName: 'Israel'
    },
    AdministrativeArea: {
      ID: 'M',
      LocalizedName: 'Central District',
      EnglishName: 'Central District',
      Level: 1,
      LocalizedType: 'District',
      EnglishType: 'District',
      CountryID: 'IL'
    },
    TimeZone: {
      Code: 'IDT',
      Name: 'Asia/Jerusalem',
      GmtOffset: 3,
      IsDaylightSaving: true,
      NextOffsetChange: '2020-10-24T23:00:00Z'
    },
    GeoPosition: {
      Latitude: 32.267,
      Longitude: 34.95,
      Elevation: {
        Metric: {
          Value: 80,
          Unit: 'm',
          UnitType: 5
        },
        Imperial: {
          Value: 262,
          Unit: 'ft',
          UnitType: 0
        }
      }
    },
    IsAlias: false,
    SupplementalAdminAreas: [],
    DataSets: [
      'AirQualityCurrentConditions',
      'AirQualityForecasts',
      'Alerts',
      'ForecastConfidence'
    ]
  }