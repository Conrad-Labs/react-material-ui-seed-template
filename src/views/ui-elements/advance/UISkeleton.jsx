// material-ui
import Grid from '@mui/material/Grid';

// project imports
import SubCard from 'ui-component/cards/SubCard';
import MainCard from 'ui-component/cards/MainCard';
import SecondaryAction from 'ui-component/cards/CardSecondaryAction';
import SkeletonEarningCard from 'ui-component/cards/Skeleton/EarningCard';
import SkeletonTotalIncomeCard from 'ui-component/cards/Skeleton/TotalIncomeCard';
import SkeletonChartCard from 'ui-component/cards/Skeleton/TotalGrowthBarChart';
import SkeletonPopularCard from 'ui-component/cards/Skeleton/PopularCard';
import { gridSpacing } from 'store/constant';

// ==============================|| UI SKELETON ||============================== //

const UISkeleton = () => (
    <MainCard title="Skeleton" secondary={<SecondaryAction link="https://next.material-ui.com/components/skeleton/" />}>
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6}>
                <SubCard title="Skeleton EarningCard">
                    <SkeletonEarningCard />
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="Skeleton TotalIncomeCard">
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12}>
                            <SkeletonTotalIncomeCard />
                        </Grid>
                        <Grid item xs={12}>
                            <SkeletonTotalIncomeCard />
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
                <SubCard title="Skeleton TotalGrowthBarChart">
                    <SkeletonChartCard />
                </SubCard>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
                <SubCard title="Skeleton PopularCard">
                    <SkeletonPopularCard />
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default UISkeleton;
